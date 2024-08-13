import React from "react";
import { Link } from "react-router-dom";

export default function UserHeadSection({ data }) {
  return (
    <>
      <div className="flex justify-end">
        <Link
          to={"/all-users"}
          className="p-2 bg-teal-600 hover:bg-teal-500 nav-link rounded-lg text-neutral-200"
        >
          Go back
        </Link>
      </div>
      <div className="bg-teal-800 p-5 rounded-lg my-5 text-neutral-200 flex justify-between items-center shadow-lg shadow-teal-600">
        <div>
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src={data?.image ? data.image : "/nouser.png"}></img>
            </div>
            <div className="flex flex-col justify-between">
              <h1>{data?.username}</h1>
              <h1>{data?.email}</h1>
              <h1>{data?.phone && data.phone}</h1>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={`/all-users/${data?._id}/edit`}
            className="p-2 px-3 bg-teal-500 rounded-lg hover:bg-teal-400 nav-link"
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}
