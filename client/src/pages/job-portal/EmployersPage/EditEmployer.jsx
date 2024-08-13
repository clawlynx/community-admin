import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleEmployer from "../../../hooks/jobportal/useGetSingleEmployer";
import Loading from "../../../components/Loading";
import EditEmployerSection from "../../../components/jobportal/employers/editPage/EditEmployerSection";

function EditEmployer() {
  const { id } = useParams();
  const { loading, employer } = useGetSingleEmployer({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <EditEmployerSection data={employer} />
    </div>
  );
}

export default EditEmployer;
