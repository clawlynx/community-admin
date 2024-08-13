import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleJob from "../../../hooks/jobportal/useGetSingleJob";
import Loading from "../../../components/Loading";
import EditJobSection from "../../../components/jobportal/jobs/editpage/EditJobSection";

export default function EditJob() {
  const { id } = useParams();
  const { loading, job } = useGetSingleJob({ id });
  console.log(job);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <EditJobSection data={job} />
    </div>
  );
}
