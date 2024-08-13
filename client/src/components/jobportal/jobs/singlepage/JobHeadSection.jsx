import React from "react";
import { Link } from "react-router-dom";

export default function JobHeadSection({ data }) {
  return (
    <>
      <div className="flex justify-end">
        <Link
          to={"/job-portal/jobs"}
          className="p-2 bg-teal-600 hover:bg-teal-500 nav-link rounded-lg text-neutral-200"
        >
          Go back
        </Link>
      </div>
      <div className="bg-teal-800 p-5 rounded-lg my-5 text-neutral-200 flex justify-between items-center shadow-lg shadow-teal-600">
        <div>
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={data?.owner?.logo ? data.owner.logo : "/nocompany.png"}
              ></img>
            </div>
            <div className="flex flex-col justify-between">
              <h1>{data?.jobTitle}</h1>
              <h1>{data?.owner?.companyName}</h1>
              <p>{data?.applied?.length} applicants</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={`/job-portal/jobs/${data?._id}/edit`}
            className="p-2 px-3 bg-teal-500 rounded-lg hover:bg-teal-400 nav-link"
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}
