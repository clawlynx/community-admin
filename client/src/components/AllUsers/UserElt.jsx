import React from "react";

export default function UserElt({
  profilePic,
  name,
  email,
  contact,
  location,
  id,
}) {
  return (
    <div className="grid grid-cols-5 p-3 px-5 bg-teal-300 rounded-lg">
      <div className="flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={profilePic ? profilePic : "/nouser.png"}></img>
        </div>
        <h1>{name}</h1>
      </div>

      <h1 className="">{contact ? contact : "Nill"}</h1>
      <h1>{email}</h1>
      <h1>{location}</h1>

      <button className="p-2 bg-teal-900 text-neutral-300 rounded-lg hover:bg-teal-500 nav-link">
        View
      </button>
    </div>
  );
}

//flex justify-between items-center p-3 px-5 bg-teal-300 rounded-lg
