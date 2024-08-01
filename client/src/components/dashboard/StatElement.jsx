import React from "react";

export default function StatElement({ name, count, bg }) {
  return (
    <div
      className={`${
        bg ? bg : "bg-teal-800"
      } w-36 h-36 rounded-full flex flex-col justify-center items-center text-neutral-200`}
    >
      <h1 className="text-3xl">{count}</h1>
      <p className="text-xl">{name}</p>
    </div>
  );
}
