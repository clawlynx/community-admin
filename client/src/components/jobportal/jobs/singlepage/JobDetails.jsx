import React from "react";
import DetailElt from "../../../DetailElt";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import SmallDetail from "../../../SmallDetail";
import SmallDetailList from "../../../SmallDetailList";

export default function JobDetails({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        Job Details
      </h1>
      <div className="flex flex-col gap-7 px-5 border-b border-teal-300 pb-3">
        <DetailElt
          icon={<IoLocationSharp />}
          content={`${data?.jobPlace}, ${data?.jobLocation}`}
        />
        <DetailElt icon={<MdEmail />} content={data?.owner?.companyEmail} />
        <DetailElt
          icon={<FaPhoneAlt />}
          content={data?.owner?.companyContact}
        />
      </div>
      <div className="flex flex-col gap-7 px-5 py-3">
        <SmallDetail title={"Category"} content={data?.category} />
        <SmallDetail
          title={"Posted on"}
          content={data?.createdAt.toString().slice(0, 10)}
        />
        <SmallDetail title={"Experience"} content={data?.experience} />
        <SmallDetail title={"Gender"} content={data?.gender} />
        <SmallDetail title={"Job Type"} content={data?.jobType} />
        <SmallDetail title={"Qualification"} content={data?.qualification} />
        <SmallDetail title={"Salary"} content={`${data?.salary} LPA`} />
        <SmallDetail title={"Applicants"} content={data?.applied?.length} />
        <SmallDetail
          title={"Short Listed"}
          content={data?.shortListed?.length}
        />
        <SmallDetailList title={"Skills Required"} list={data?.skills} />
      </div>
    </div>
  );
}
