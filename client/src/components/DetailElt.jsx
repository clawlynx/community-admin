import React from "react";

export default function DetailElt({ icon, content }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="text-2xl text-teal-500">{icon}</div>
      <p className="text-lg">{content}</p>
    </div>
  );
}
