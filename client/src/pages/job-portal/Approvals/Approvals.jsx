import React from "react";
import useGetApprovals from "../../../hooks/jobportal/useGetApprovals";
import Loading from "../../../components/Loading";
import ApprovalElt from "../../../components/jobportal/approvals/ApprovalElt";

function Approvals() {
  const { loading, approvals } = useGetApprovals();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">Approvals</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        {approvals.length > 0 &&
          approvals.map((x) => (
            <ApprovalElt
              key={x._id}
              image={x.logo}
              name={x.companyName}
              gst={x.gstNo}
              registration={x.registrationId}
              pan={x.panId}
              id={x._id}
            />
          ))}
        {approvals.length === 0 && <p className="py-5">No Requests</p>}
      </div>
    </div>
  );
}

export default Approvals;
