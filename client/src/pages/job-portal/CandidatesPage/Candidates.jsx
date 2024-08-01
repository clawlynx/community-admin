import React from "react";
import SearchBox from "../../../components/SearchBox";
import SortBox from "../../../components/SortBox";
import CandidateElt from "../../../components/jobportal/candidates/CandidateElt";

export default function Candidates() {
  return (
    <div>
      <h1 className="text-2xl">Candidates</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
        <CandidateElt />
      </div>
    </div>
  );
}
