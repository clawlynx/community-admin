import React from "react";

export default function SmallDetail({ title, content }) {
  return (
    <div className="flex gap-3">
      <h1 className="w-44">{title}</h1>
      <p>:</p>
      <p>{content}</p>
    </div>
  );
}
