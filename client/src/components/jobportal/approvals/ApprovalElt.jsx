import React from "react";
import useVerifyCompany from "../../../hooks/jobportal/useVerifyCompany";
import Loading from "../../Loading";

export default function ApprovalElt({
  image,
  name,
  gst,
  registration,
  pan,
  id,
}) {
  const { loading, verifyCompany } = useVerifyCompany();
  async function handleVerify() {
    await verifyCompany({ id });
  }
  return (
    <div className="flex flex-col gap-5 items-center p-3 px-5 bg-teal-300 rounded-lg">
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={image ? image : "/nocompany.png"}></img>
        </div>
        <h1 className="text-2xl">{name ? name : "N/A"}</h1>
      </div>
      <h1 className="font-bold">GST NO: {gst}</h1>
      <h1 className="font-bold">Company Registration ID: {registration}</h1>
      <h1 className="font-bold">PAN NO: {pan}</h1>
      <button
        onClick={handleVerify}
        disabled={loading}
        className="p-2 bg-teal-900 text-center text-neutral-300 rounded-lg hover:bg-teal-500 nav-link"
      >
        Verify
      </button>
      {loading && <Loading />}
    </div>
  );
}
