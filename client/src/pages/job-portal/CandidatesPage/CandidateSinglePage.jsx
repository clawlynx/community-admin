import React from "react";
import CandidateHeadSection from "../../../components/jobportal/candidates/singlepage/CandidateHeadSection";
import { useParams } from "react-router-dom";
import useGetSingleJobSeeker from "../../../hooks/jobportal/useGetSingleJobSeeker";
import Loading from "../../../components/Loading";
import CandidateDetails from "../../../components/jobportal/candidates/singlepage/CandidateDetails";
import AppliedJobs from "../../../components/jobportal/candidates/singlepage/AppliedJobs";

export default function CandidateSinglePage() {
  const { id } = useParams();
  const { loading, candidate } = useGetSingleJobSeeker({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <CandidateHeadSection data={candidate} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        <CandidateDetails data={candidate} />
        <AppliedJobs data={candidate} />
      </div>
    </div>
  );
}
