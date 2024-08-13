import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import DetailElt from "../../DetailElt";
import SmallDetail from "../../SmallDetail";
import SmallDetailList from "../../SmallDetailList";

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
        <SmallDetail title={"Gender"} content={data?.gender} />
        <SmallDetail
          title={"Highest Qualification"}
          content={data?.highestQualification}
        />
        <SmallDetailList title={"Hobbies"} list={data?.hobbies} />
        <SmallDetailList title={"Interest"} list={data?.interest} />
        <SmallDetail title={"smoking"} content={data?.smoking} />
        <SmallDetail title={"drinking"} content={data?.drinking} />
      </div>
    </div>
  );
}
