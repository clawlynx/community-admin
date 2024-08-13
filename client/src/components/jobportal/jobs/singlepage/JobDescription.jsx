import React from "react";

export default function JobDescription({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        Job Description
      </h1>
      <p
        className=" leading-9"
        dangerouslySetInnerHTML={{ __html: data?.description }}
      ></p>
    </div>
  );
}
