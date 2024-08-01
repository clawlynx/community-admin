import React from "react";
import StatElement from "./StatElement";

export default function AllUsersSection() {
  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">All Apps</h1>
        <StatElement name={"Users"} count={"10"} />
      </div>
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">Job Portal</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 justify-between w-full place-items-center">
          <StatElement name={"Employers"} count={"10"} bg={"bg-blue-600"} />
          <StatElement name={"Candidates"} count={"10"} bg={"bg-blue-600"} />
          <StatElement name={"Jobs"} count={"10"} bg={"bg-blue-600"} />
        </div>
      </div>
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">Study Abroad</h1>
        <div className="grid grid-cols-2 gap-y-10 justify-between w-full place-items-center">
          <StatElement name={"Appointments"} count={"10"} bg={"bg-zinc-800"} />
          <StatElement name={"Enquiries"} count={"10"} bg={"bg-zinc-800"} />
        </div>
      </div>
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">E-Commerce</h1>
        <div className="grid grid-cols-2 gap-y-10 justify-between w-full place-items-center">
          <StatElement name={"Products"} count={"10"} bg={"bg-yellow-600"} />
          <StatElement name={"Orders"} count={"10"} bg={"bg-yellow-600"} />
        </div>
      </div>
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">Matrimony</h1>
        <div className="grid grid-cols-2 gap-y-10 justify-between w-full place-items-center">
          <StatElement name={"Users"} count={"10"} bg={"bg-orange-600"} />
          <StatElement name={"Success"} count={"10"} bg={"bg-orange-600"} />
        </div>
      </div>
      <div className="border p-5 border-neutral-300 flex flex-col justify-between items-center rounded-md shadow-md">
        <h1 className="text-2xl my-5">Dating</h1>
        <StatElement name={"Users"} count={"10"} bg={"bg-red-700"} />
      </div>
    </div>
  );
}
