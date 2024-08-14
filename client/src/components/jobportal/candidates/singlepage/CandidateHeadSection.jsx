import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../../../DeleteModal";
import useDeleteJobSeeker from "../../../../hooks/jobportal/useDeleteJobSeeker";

export default function CandidateHeadSection({ data }) {
  const [isDelete, setIsDelete] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const { loading, deleteJobSeeker } = useDeleteJobSeeker();

  function cancelDelete() {
    setDeleteId("");
    setIsDelete(false);
  }

  async function confirmDelete() {
    await deleteJobSeeker({ id: deleteId });
    setIsDelete(false);
    setDeleteId("");
  }
  return (
    <>
      <div className="flex justify-end">
        <Link
          to={"/job-portal/candidates"}
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
                src={data?.profilePic ? data.profilePic : "/nouser.png"}
              ></img>
            </div>
            <div className="flex flex-col justify-between">
              <h1>{data?.fullName ? data.fullName : data?.owner?.username}</h1>
              <h1>{data?.oneWord}</h1>
              <p>{data?.owner && data.owner.address}</p>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={`/job-portal/candidates/${data?._id}/edit`}
            className="p-2 px-3 bg-teal-500 rounded-lg hover:bg-teal-400 nav-link"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              setIsDelete(true);
              setDeleteId(data?._id);
            }}
            className="p-2 px-3 bg-red-600 rounded-lg hover:bg-red-500 nav-link mx-2"
          >
            Delete
          </button>
        </div>
      </div>
      {isDelete && (
        <div className="relative">
          <DeleteModal function1={cancelDelete} function2={confirmDelete} />
        </div>
      )}
    </>
  );
}
