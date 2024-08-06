import React from "react";
import EmployerHeadSection from "../../../components/jobportal/employers/singlepage/EmployerHeadSection";
import { useParams } from "react-router-dom";
import useGetSingleEmployer from "../../../hooks/jobportal/useGetSingleEmployer";
import Loading from "../../../components/Loading";
import EmployerDetails from "../../../components/jobportal/employers/singlepage/EmployerDetails";
import JobSection from "../../../components/jobportal/employers/singlepage/JobSection";

function EmployerSinglePage() {
  const { id } = useParams();
  const { loading, employer } = useGetSingleEmployer({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <EmployerHeadSection data={employer} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        <EmployerDetails data={employer} />
        <JobSection data={employer} />
      </div>
    </div>
  );
}

export default EmployerSinglePage;
