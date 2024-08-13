import React from "react";
import { MdWork } from "react-icons/md";

export default function AppliedJobs({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5 max-h-[1086px] overflow-auto">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        Applied Jobs
      </h1>
      <div className="flex flex-col gap-5">
        {data?.appliedJobs?.length > 0 &&
          data.appliedJobs.map((x) => (
            <div
              key={x._id}
              className="bg-teal-300 p-3 rounded-lg shadow-lg shadow-teal-500"
            >
              <div className="flex justify-between items-center border-b border-teal-500 pb-3 ">
                <div className="flex gap-3 items-center">
                  <span className="text-3xl text-teal-700">
                    <MdWork />
                  </span>
                  <span className="text-xl">{x.jobTitle}</span>
                </div>
              </div>
              <div className="flex flex-col gap-7 px-5 py-3">
                <div className="flex gap-3">
                  <h1 className="w-40">Category</h1>
                  <p>:</p>
                  <p>{x.category}</p>
                </div>
                <div className="flex gap-3">
                  <h1 className="w-40">Action</h1>
                  <p>:</p>
                  <p>
                    {data?.shortListed.includes(x._id)
                      ? "Shortlisted"
                      : data?.rejected.includes(x._id)
                      ? "Rejected"
                      : "Pending"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
