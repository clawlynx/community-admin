import React from "react";

export default function AppUsed() {
  return (
    <div className="bg-teal-200 rounded-lg p-2 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">Apps Usage</h1>
      <div className="flex flex-col justify-between gap-7">
        <div className="bg-blue-400 py-5 px-3 flex justify-between rounded-lg">
          <p>Job Portal</p>
          <p>1 hrs</p>
        </div>
        <div className="bg-zinc-800 text-white py-5 px-3 flex justify-between rounded-lg">
          <p>Study Abroad</p>
          <p>1 hrs</p>
        </div>
        <div className="bg-yellow-400 py-5 px-3 flex justify-between rounded-lg">
          <p>E-commerce</p>
          <p>1 hrs</p>
        </div>
        <div className="bg-red-500 py-5 px-3 flex justify-between rounded-lg">
          <p>Dating</p>
          <p>1 hrs</p>
        </div>
        <div className="bg-red-300 py-5 px-3 flex justify-between rounded-lg">
          <p>Matrimony</p>
          <p>1 hrs</p>
        </div>
      </div>
    </div>
  );
}
