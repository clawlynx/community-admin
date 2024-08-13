import React from "react";
import { Link } from "react-router-dom";

export default function CandidateElt({
  image,
  name,
  email,
  role,
  location,
  id,
}) {
  return (
    <div className="grid grid-cols-5 items-center p-3 px-5 bg-teal-300 rounded-lg">
      <div className="flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={image ? image : "/nouser.png"}></img>
        </div>
        <h1>{name ? name : "N/A"}</h1>
      </div>

      <h1>{role ? role : "N/A"}</h1>
      <h1>{email ? email : "N/A"}</h1>
      <h1>{location ? location : "N/A"}</h1>

      <Link
        to={`/job-portal/candidates/${id}`}
        className="p-2 bg-teal-900 text-center text-neutral-300 rounded-lg hover:bg-teal-500 nav-link"
      >
        View
      </Link>
    </div>
  );
}
