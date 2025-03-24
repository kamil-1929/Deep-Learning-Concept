import React, { useState } from "react";
import axios from "axios";
import URLInput from "./URLInput";
import JobList from "./JobList";
import EmailPreview from "./EmailPreview";

const EmailGeneratorApp = () => {
  const [url, setUrl] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [links, setLinks] = useState([]);
  const [email, setEmail] = useState("");

  const handleExtractJobs = async () => {
    try {
      const res = await axios.post("http://localhost:8000/extract-jobs", {
        url,
      });
      const jobs = res.data.jobs;
      if (!Array.isArray(jobs)) throw new Error("Jobs is not an array");
      setJobs(jobs);
    } catch (err) {
      console.error("Error extracting jobs:", err);
      alert("Error extracting jobs. See console.");
    }
  };

  const handleSelectJob = async (job) => {
    try {
      let rawSkills = job.skills || [];
      if (typeof rawSkills === "string") rawSkills = [rawSkills];

      const skillsArray = rawSkills
        .flatMap((str) => str.split(","))
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await axios.post("http://localhost:8000/portfolio-links", {
        skills: skillsArray,
      });

      setSelectedJob({ ...job, skills: skillsArray });
      setLinks(res.data.links || []);
    } catch (err) {
      console.error("Error fetching portfolio links:", err);
      alert("Error selecting job. See console.");
    }
  };

  const handleGenerateEmail = async () => {
    try {
      const res = await axios.post("http://localhost:8000/generate-email", {
        job: selectedJob,
        links,
      });
      setEmail(res.data.email || "No email generated.");
    } catch (err) {
      console.error("Error generating email:", err);
      alert("Error generating email.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
        ✨ Cold Email Generator
      </h1>

      <URLInput url={url} setUrl={setUrl} onSubmit={handleExtractJobs} />
      <JobList jobs={jobs} onSelect={handleSelectJob} />
      {selectedJob && (
        <EmailPreview
          job={selectedJob}
          links={links}
          email={email}
          onGenerate={handleGenerateEmail}
        />
      )}
    </div>
  );
};

export default EmailGeneratorApp;
