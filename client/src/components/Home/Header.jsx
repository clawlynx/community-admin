import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/auth/useLogout";

export default function Header() {
  const { user } = useSelector((state) => state.user);
  const [showprofileBar, setShowProfileBar] = useState(false);
  const { loading, logout } = useLogout();

  async function handleLogout() {
    await logout();
  }
  return (
    <div className="h-20 flex justify-between bg-neutral-200 items-center w-full border-b sticky top-0 z-10 border-neutral-300 px-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold">Welcome Admin...</h1>
        <h1 className="text-sm">Here is what is happening to your app</h1>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-2xl">
          <FaRegBell className="hover:fill-teal-900" />
        </div>
        {!user && (
          <Link
            to={"/auth/login"}
            className="p-3 px-5 bg-teal-900 rounded-l-full rounded-r-full text-neutral-200 hover:bg-teal-500 nav-link"
          >
            Login
          </Link>
        )}
        {user?.username && (
          <div className="relative">
            <button
              className="p-3 px-5 flex items-center gap-2 bg-teal-900 rounded-l-full rounded-r-full text-neutral-200 hover:bg-teal-500 nav-link"
              onClick={() => setShowProfileBar(!showprofileBar)}
            >
              <span className="">{user.username}</span>
              <span className="text-2xl">
                <RiArrowDropDownLine />
              </span>
            </button>
            {showprofileBar && (
              <div className="bg-teal-600 text-neutral-300 px-2 py-2 w-40 absolute top-14 right-0 rounded-md">
                <button
                  className="p-2 border-b border-teal-800 w-full text-left"
                  onClick={handleLogout}
                  disabled={loading}
                >
                  {" "}
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
