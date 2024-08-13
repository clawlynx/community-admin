import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleJobSeeker from "../../../hooks/jobportal/useGetSingleJobSeeker";
import Loading from "../../../components/Loading";
import EditCandidateSection from "../../../components/jobportal/candidates/editpage/EditCandidateSection";

export default function EditCandidate() {
  const { id } = useParams();
  const { loading, candidate } = useGetSingleJobSeeker({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <EditCandidateSection data={candidate} />
    </div>
  );
}
