import React from "react";
import JobHeadSection from "../../../components/jobportal/jobs/singlepage/JobHeadSection";
import JobDetails from "../../../components/jobportal/jobs/singlepage/JobDetails";
import ApplicantSection from "../../../components/jobportal/jobs/singlepage/ApplicantSection";
import { useParams } from "react-router-dom";
import useGetSingleJob from "../../../hooks/jobportal/useGetSingleJob";
import Loading from "../../../components/Loading";
import JobDescription from "../../../components/jobportal/jobs/singlepage/JobDescription";

export default function JobSinglePage() {
  const { id } = useParams();
  const { loading, job } = useGetSingleJob({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <JobHeadSection data={job} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        <JobDetails data={job} />
        <ApplicantSection data={job} />
      </div>
      <JobDescription data={job} />
    </div>
  );
}
