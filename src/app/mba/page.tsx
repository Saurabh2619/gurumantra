import React from "react";
import DefaultLayout from "../defaultlayout";

export default function MBA() {
  return (
    <>
      <DefaultLayout>
        <div className="container max-w-6xl mx-auto px-4">
          <h6 className="text-primary text-2xl font-semibold mt-4 mb-4">Hello Sir, MBA Here</h6>
          <p className="text-gray-700 text-base leading-relaxed mb-10">
            A Master of Business Administration (MBA) is a postgraduate degree focused on business management, leadership, and analytical skills. It is designed to prepare students for senior-level roles in organizations across industries such as finance, marketing, operations, and human resources. MBA programs often include case studies, internships, and real-world projects that foster strategic thinking and decision-making abilities.
          </p>
        </div>
      </DefaultLayout>
    </>
  );
}
