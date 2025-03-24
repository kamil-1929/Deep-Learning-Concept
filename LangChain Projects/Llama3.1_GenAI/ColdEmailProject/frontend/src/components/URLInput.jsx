import React from "react";

const URLInput = ({ url, setUrl, onSubmit }) => (
  <div className="mb-6">
    <label className="block text-sm font-medium mb-1">Enter Job URL</label>
    <input
      type="text"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      placeholder="https://example.com/job"
      className="w-full border border-gray-300 p-2 rounded"
    />
    <button
      onClick={onSubmit}
      className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Extract Jobs
    </button>
  </div>
);

export default URLInput;
