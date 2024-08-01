import React from "react";
import SearchBox from "../../../components/SearchBox";
import SortBox from "../../../components/SortBox";
import JobElt from "../../../components/jobportal/jobs/JobElt";

export default function Jobs() {
  return (
    <div>
      <h1 className="text-2xl">Jobs</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        <JobElt />
        <JobElt />
        <JobElt />
        <JobElt />
        <JobElt />
        <JobElt />
        <JobElt />
      </div>
    </div>
  );
}
