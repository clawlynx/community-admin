import React from "react";
import UserElt from "../../components/AllUsers/UserElt";
import SearchBox from "../../components/SearchBox";
import SortBox from "../../components/SortBox";
import useGetAllUsers from "../../hooks/allusers/useGetAllUsers";
import Loading from "../../components/Loading";

export default function AllUsers() {
  const { loading, users } = useGetAllUsers();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1 className="text-2xl">All Users</h1>
      <div className="flex flex-col gap-2 p-5 bg-teal-200 rounded-lg my-5">
        <div className="flex justify-between items-center">
          <SearchBox />
          <SortBox />
        </div>
        {users.length > 0 &&
          users.map((x) => (
            <UserElt
              key={x._id}
              profilePic={x.image}
              name={x.username}
              contact={x.phone ? x.phone : "Nill"}
              email={x.email}
              location={x.address}
              id={x._id}
            />
          ))}
      </div>
    </div>
  );
}
