import React from "react";

const JobList = ({ jobs, onSelect }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold mb-4 text-gray-700">Extracted Jobs</h2>
    <ul className="space-y-4">
      {jobs.map((job, index) => (
        <li key={index} className="bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md">
          <p className="text-lg font-semibold text-green-700">{job.role}</p>
          <p className="text-sm text-gray-600">{job.experience}</p>
          <p className="text-sm text-gray-700 italic mt-2">
            {(job.skills || []).join(", ")}
          </p>
          <button
            onClick={() => onSelect(job)}
            className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
          >
            Select this Job
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default JobList;
