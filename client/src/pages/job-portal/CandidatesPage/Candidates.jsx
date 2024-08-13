import React from "react";
import SearchBox from "../../../components/SearchBox";
import SortBox from "../../../components/SortBox";
import CandidateElt from "../../../components/jobportal/candidates/CandidateElt";
import useGetJobSeekers from "../../../hooks/jobportal/useGetJobSeekers";
import Loading from "../../../components/Loading";

export default function Candidates() {
  const { loading, jobseekers } = useGetJobSeekers();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">Candidates</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        {jobseekers.length > 0 &&
          jobseekers.map((x) => (
            <CandidateElt
              key={x._id}
              image={x.profilePic}
              name={x.fullName ? x.fullName : x.owner.username}
              role={x.oneWord}
              email={x.owner.email}
              location={x.owner.address}
              id={x._id}
            />
          ))}
      </div>
    </div>
  );
}
