from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from chains import Chain
from portfolio import Portfolio
from utils import clean_text
from langchain_community.document_loaders import WebBaseLoader
import json 

# Initialize FastAPI
app = FastAPI()

# Enable CORS (allow frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Instantiate logic
llm_chain = Chain()
portfolio = Portfolio()

# Request body models
class URLRequest(BaseModel):
    url: str

class SkillsRequest(BaseModel):
    skills: list[str]

class JobAndLinksRequest(BaseModel):
    job: dict
    links: list

# --- Endpoints ---

@app.post("/extract-jobs")
def extract_jobs(request: URLRequest):
    try:
        loader = WebBaseLoader([request.url])
        raw_text = loader.load().pop().page_content
        cleaned = clean_text(raw_text)

        portfolio.load_portfolio()
        jobs_str = llm_chain.extract_jobs(cleaned)

        # ✅ FIX: convert if string, keep if already list
        jobs = jobs_str if isinstance(jobs_str, list) else json.loads(jobs_str)
        return {"jobs": jobs}
    except Exception as e:
        print("❌ Backend error:", str(e))
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/portfolio-links")
def get_links(req: SkillsRequest):
    try:
        print("Querying portfolio with:", req.skills)
        links = portfolio.query_links(req.skills)
        print("Returned links:", links)
        return {"links": links}
    except Exception as e:
        print("❌ Error in portfolio matching:", e)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/generate-email")
def generate_email(req: JobAndLinksRequest):
    try:
        email = llm_chain.write_mail(req.job, req.links)
        return {"email": email}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
