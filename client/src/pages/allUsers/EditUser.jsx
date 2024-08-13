import React from "react";
import EditUserSection from "../../components/AllUsers/editpage/EditUserSection";
import { useParams } from "react-router-dom";
import useGetSingleUser from "../../hooks/allusers/useGetSingleUser";
import Loading from "../../components/Loading";

export default function EditUser() {
  const { id } = useParams();

  const { loading, user } = useGetSingleUser({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <EditUserSection data={user} />
    </div>
  );
}
