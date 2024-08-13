import React from "react";

export default function SmallDetailList({ title, list }) {
  return (
    <div className="flex gap-3">
      <h1 className="w-44">{title}</h1>
      <p>:</p>
      <ul>
        {list &&
          list.map((x) => (
            <li key={x} className="leading-6">
              {x}
            </li>
          ))}
      </ul>
    </div>
  );
}
