import React from "react";
import { MdWork } from "react-icons/md";

export default function JobSection({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5 max-h-[1086px] overflow-auto">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        Jobs Posted
      </h1>
      <div>
        <div className="flex flex-col gap-5">
          {data?.totalJobs.length > 0 &&
            data.totalJobs.map((x) => (
              <div className="bg-teal-300 p-3 rounded-lg shadow-lg shadow-teal-500">
                <div className="flex justify-between items-center border-b border-teal-500 pb-3 ">
                  <div className="flex gap-3 items-center">
                    <span className="text-3xl text-teal-700">
                      <MdWork />
                    </span>
                    <span className="text-xl">{x.jobTitle}</span>
                  </div>
                  <p>Posted on:{x.createdAt.toString().slice(0, 10)} </p>
                </div>
                <div className="flex flex-col gap-7 px-5 py-3">
                  <div className="flex gap-3">
                    <h1 className="w-40">Category</h1>
                    <p>:</p>
                    <p>{x.category}</p>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="w-40">Applicants</h1>
                    <p>:</p>
                    <p>{x.applied.length}</p>
                  </div>
                  <div className="flex gap-3">
                    <h1 className="w-40">ShortListed</h1>
                    <p>:</p>
                    <p>{x.shortListed.length}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
