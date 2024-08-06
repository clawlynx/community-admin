import React from "react";
import UserHeadSection from "../../components/AllUsers/singlepage/UserHeadSection";
import UserDetails from "../../components/AllUsers/singlepage/UserDetails";
import AppUsed from "../../components/AllUsers/singlepage/AppUsed";
import { useParams } from "react-router-dom";
import useGetSingleUser from "../../hooks/allusers/useGetSingleUser";
import Loading from "../../components/Loading";

export default function AllUsersSinglePage() {
  const { id } = useParams();

  const { loading, user } = useGetSingleUser({ id });

  return loading ? (
    <Loading />
  ) : (
    <div>
      <UserHeadSection data={user} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        <UserDetails data={user} />
        <AppUsed />
      </div>
    </div>
  );
}
