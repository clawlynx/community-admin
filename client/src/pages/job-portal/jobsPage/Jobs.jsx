import React from "react";
import SearchBox from "../../../components/SearchBox";
import SortBox from "../../../components/SortBox";
import JobElt from "../../../components/jobportal/jobs/JobElt";
import useGetAllJobs from "../../../hooks/jobportal/useGetAllJobs";
import Loading from "../../../components/Loading";

export default function Jobs() {
  const { loading, jobs } = useGetAllJobs();
  console.log(jobs);
  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">Jobs</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        {jobs.length > 0 &&
          jobs.map((x) => (
            <JobElt
              key={x._id}
              image={x.owner?.logo}
              name={x.jobTitle}
              company={x.owner?.companyName}
              jobtype={x.jobType}
              location={x.jobLocation}
              id={x._id}
            />
          ))}
      </div>
    </div>
  );
}
