// src/components/TechDetailsToggle.jsx
"use client";

import { useState } from "react";

export default function TechDetailsToggle({ project }) {
  const [showTechDetails, setShowTechDetails] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowTechDetails(!showTechDetails)}
        className="text-[var(--accent-color-1)] hover:underline"
      >
        {showTechDetails ? "Hide Tech Details" : "Show Tech Details"}
      </button>
      {showTechDetails && (
        <div className="mt-4 text-sm text-[var(--text-color)]">
          <h4 className="font-semibold mb-2">Technical Details</h4>
          <p>
            <strong>Aim:</strong> {project.aim}
          </p>
          <p>
            <strong>Outcome:</strong> {project.outcome}
          </p>
          <p>
            <strong>Expertise:</strong> {project.expertise}
          </p>
          <p>
            <strong>Problem-solving:</strong> {project.problemSolving}
          </p>
        </div>
      )}
    </>
  );
}