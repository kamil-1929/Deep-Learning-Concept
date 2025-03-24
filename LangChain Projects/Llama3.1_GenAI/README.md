## 🚀 ColdMail - AI-Powered Cold Email Generator

ColdMail is a modern web application that helps job seekers and professionals craft intelligent, personalized cold emails using the power of LLMs (Large Language Models). Just paste a job URL and let ColdMail match your portfolio and generate a tailored email that gets attention.

---

## ✨ Features

- 🔗 Paste any job listing URL
- 🧠 Extract job info using LLM (Groq + LangChain)
- 🔍 Match your skills using ChromaDB and portfolio CSV
- ✉️ Generate a cold email with clear, personalized content
- 🎨 Beautiful UI with Tailwind CSS and animations
- 🧭 Multi-page app: Home, Generate, About, Contact

---

## 💻 Tech Stack

### Frontend

- React 18+
- Tailwind CSS
- Framer Motion
- React Router DOM

### Backend

- FastAPI
- LangChain
- Groq LLM API (LLaMA 3.1 70B)
- ChromaDB
- Python 3.10+

---

## 📁 Project Structure

```
frontend/
├── components/
│   ├── EmailPreview.jsx
│   ├── EmailGeneratorApp.jsx
│   ├── JobList.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Generate.jsx
├── App.js
├── index.js
└── tailwind.config.js

backend/
├── app.py
├── chains.py
├── portfolio.py
├── utils.py
├── my_portfolio.csv
└── requirements.txt
```

---

## 🛠 Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in the backend with your Groq API key:

```bash
GROQ_API_KEY=your_groq_key_here
```

---

## 📬 Contact

For questions or improvements:

- Email: kamil.329@outlook.com
- GitHub: [github.com/kamil-1929](https://github.com/yourusername)

---

## 📄 License

MIT License. Feel free to fork, modify, and build upon it!
