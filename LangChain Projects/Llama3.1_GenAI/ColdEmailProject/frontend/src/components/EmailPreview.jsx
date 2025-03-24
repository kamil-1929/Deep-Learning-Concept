import React from "react";

const EmailPreview = ({ job, links, email, onGenerate }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">Selected Job</h2>
    <div className="bg-gray-50 p-4 rounded-lg border">
      <p className="font-semibold text-lg">{job.role}</p>
      <p className="text-sm text-gray-500 mb-2">{job.experience}</p>
      <p className="text-sm mb-2">{job.description}</p>
    </div>

    <h3 className="mt-6 font-semibold text-gray-700">Matched Portfolio Links</h3>
    {links.length === 0 ? (
      <p className="text-sm italic text-gray-400">No matching projects found.</p>
    ) : (
      <div className="flex flex-wrap gap-2 mt-2">
        {links.map((link, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full shadow-sm">
            {link}
          </span>
        ))}
      </div>
    )}

    <button
      onClick={onGenerate}
      className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-purple-700"
    >
      ✨ Generate Email
    </button>

    {email && (
      <div className="mt-8 bg-white border border-gray-200 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-green-700 mb-2">📨 Generated Email</h3>
        <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">{email}</pre>
      </div>
    )}
  </div>
);

export default EmailPreview;
