import React from "react";

export default function SortBox() {
  return (
    <div>
      <select className="bg-teal-300 p-2 text-zinc-950 rounded-lg">
        <option value={"Newest"}>Newest</option>
        <option value={"Oldest"}>Oldest</option>
      </select>
    </div>
  );
}
