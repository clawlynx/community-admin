import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import DetailElt from "../../DetailElt";

export default function UserDetails({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        User Details
      </h1>
      <div className="flex flex-col gap-7 px-5 border-b border-teal-300 pb-3">
        <DetailElt icon={<IoLocationSharp />} content={data?.address} />
        <DetailElt icon={<FaClock />} content={`${data?.age} y/o`} />
        <DetailElt
          icon={<FaCalendarAlt />}
          content={data?.dateOfBirth.toString().slice(0, 10)}
        />
      </div>
      <div className="flex flex-col gap-7 px-5 py-3">
        <div className="flex gap-3">
          <h1 className="w-44">Gender</h1>
          <p>:</p>
          <p>{data?.gender}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-44">Highest Qualification</h1>
          <p>:</p>
          <p>{data?.highestQualification}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-44">Hobbies</h1>
          <p>:</p>
          <ul>
            {data?.hobbies.map((x) => (
              <li key={x} className="leading-6">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <h1 className="w-44">Interest</h1>
          <p>:</p>
          <ul>
            {data?.interest.map((x) => (
              <li key={x} className="leading-6">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <h1 className="w-44">smoking</h1>
          <p>:</p>
          <p>{data?.smoking}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-44">drinking</h1>
          <p>:</p>
          <p>{data?.drinking}</p>
        </div>
      </div>
    </div>
  );
}
