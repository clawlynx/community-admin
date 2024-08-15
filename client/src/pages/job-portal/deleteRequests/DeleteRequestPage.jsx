import React from "react";
import useGetDeleteRequests from "../../../hooks/jobportal/useGetDeleteRequests";
import Loading from "../../../components/Loading";
import DeleteElement from "../../../components/jobportal/deleterequest/DeleteElement";

export default function DeleteRequestPage() {
  const { loading, employers, candidates } = useGetDeleteRequests();
  console.log(employers);
  console.log(candidates);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">Delete Request</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <h1 className="text-xl">Employers</h1>
        {employers.length > 0 &&
          employers.map((x) => (
            <DeleteElement
              key={x._id}
              name={x.companyName}
              image={x.logo}
              id={x._id}
              type={"employer"}
            />
          ))}
        {employers.length === 0 && <p className="py-5">No Requests</p>}
        <h1 className="text-xl">JobSeekers</h1>
        {candidates.length > 0 &&
          candidates.map((x) => (
            <DeleteElement
              key={x._id}
              name={x.fullName}
              image={x.profilePic}
              type={"jobseeker"}
              id={x._id}
            />
          ))}
        {candidates.length === 0 && <p className="py-5">No Requests</p>}
      </div>
    </div>
  );
}
