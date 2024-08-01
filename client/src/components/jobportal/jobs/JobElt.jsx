import React from "react";

export default function JobElt() {
  return (
    <div className="flex justify-between items-center p-3 px-5 bg-teal-300 rounded-lg">
      <div className="flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full">
          <img src="/company-1.png"></img>
        </div>
        <h1>JobName</h1>
      </div>

      <h1>CompanyName</h1>
      <h1>Full time</h1>
      <h1>Location</h1>

      <button className="p-2 bg-teal-900 text-neutral-300 rounded-lg hover:bg-teal-500 nav-link">
        View
      </button>
    </div>
  );
}
