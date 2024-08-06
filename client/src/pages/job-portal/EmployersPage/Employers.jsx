import React from "react";
import SearchBox from "../../../components/SearchBox";
import SortBox from "../../../components/SortBox";
import EmployerElt from "../../../components/jobportal/employers/EmployerElt";
import useGetEmployers from "../../../hooks/jobportal/useGetEmployers";
import Loading from "../../../components/Loading";

export default function Employers() {
  const { loading, employers } = useGetEmployers();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">Employers</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        {employers.length > 0 &&
          employers.map((x) => (
            <EmployerElt
              key={x._id}
              logo={x.logo ? x.logo : "/nocompany.png"}
              name={x.companyName}
              website={x.website}
              email={x.companyEmail}
              location={x.state}
              jobs={x.totalJobs && x.totalJobs.length}
              id={x._id}
            />
          ))}
      </div>
    </div>
  );
}
