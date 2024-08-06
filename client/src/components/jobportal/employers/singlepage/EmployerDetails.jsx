import React from "react";
import DetailElt from "../../../DetailElt";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function EmployerDetails({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">
        Company Details
      </h1>
      <div className="flex flex-col gap-7 px-5 border-b border-teal-300 pb-3">
        <DetailElt
          icon={<IoLocationSharp />}
          content={`${data?.state}, ${data?.country.toUpperCase()}`}
        />
        <DetailElt icon={<MdEmail />} content={data?.companyEmail} />
        <DetailElt icon={<FaPhoneAlt />} content={data?.companyContact} />
        <DetailElt icon={<FaFacebookSquare />} content={data?.facebook} />
        <DetailElt icon={<FaXTwitter />} content={data?.twitter} />
        <DetailElt icon={<FaLinkedin />} content={data?.linkedin} />
      </div>
      <div className="flex flex-col gap-7 px-5 py-3">
        <div className="flex gap-3">
          <h1 className="w-40">Address</h1>
          <p>:</p>
          <p>{data?.companyAddress}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-40">Founded On</h1>
          <p>:</p>
          <p>{data?.founded.toString().slice(0, 10)}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-40">Company Size</h1>
          <p>:</p>
          <p>{data?.size}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="w-40">Jobs Posted</h1>
          <p>:</p>
          <p>{data?.totalJobs.length}</p>
        </div>
        <div className="flex gap-3">
          <h1 className="min-w-40">about</h1>
          <p>:</p>
          <p className="leading-6">{data?.about}</p>
        </div>
      </div>
    </div>
  );
}
