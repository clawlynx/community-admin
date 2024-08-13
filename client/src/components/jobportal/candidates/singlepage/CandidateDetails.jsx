import React from "react";
import DetailElt from "../../../DetailElt";
import { MdEmail } from "react-icons/md";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import SmallDetail from "../../../SmallDetail";
import SmallDetailList from "../../../SmallDetailList";

export default function CandidateDetails({ data }) {
  return (
    <div className="bg-teal-200 rounded-lg p-2 px-5 mt-5">
      <h1 className="text-xl my-3 border-b border-teal-300 pb-3">Details</h1>
      <div className="flex flex-col gap-7 px-5 border-b border-teal-300 pb-3">
        <DetailElt icon={<MdEmail />} content={data?.owner?.email} />
        <DetailElt icon={<FaPhoneAlt />} content={data?.owner?.phone} />
        <DetailElt icon={<FaClock />} content={`${data?.owner?.age} y/o`} />
      </div>
      <div className="flex flex-col gap-7 px-5 py-3">
        <SmallDetail title={"Gender"} content={data?.gender} />
        <SmallDetail title={"Qualification"} content={data?.qualification} />
        <SmallDetail
          title={"Current Salary"}
          content={`${data?.currentSalary} LPA`}
        />
        <SmallDetail
          title={"Expected Salary"}
          content={`${data?.expectedSalary} LPA`}
        />
        <SmallDetail
          title={"Applied Jobs"}
          content={data?.appliedJobs?.length}
        />
        <SmallDetail
          title={"ShortListed"}
          content={data?.shortListed?.length}
        />
        <SmallDetail title={"Rejected"} content={data?.rejected?.length} />
        <SmallDetail
          title={"Experience"}
          content={`${data?.totalExperience} Years`}
        />
        <SmallDetail title={"Profile Views"} content={data?.profileViews} />
        <SmallDetail title={"Portfolio"} content={data?.portfolio} />
        <SmallDetail title={"GitHub"} content={data?.github} />
        <SmallDetailList title={"Languages"} list={data?.languages} />
        <SmallDetailList
          title={"preferred Location"}
          list={data?.preferredLocation}
        />
        <SmallDetailList title={"Skills"} list={data?.skills} />
      </div>
    </div>
  );
}
