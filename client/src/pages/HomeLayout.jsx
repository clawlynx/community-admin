import React, { useEffect } from "react";
import Header from "../components/Home/Header";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/Home/SideBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../constants";
import { setUser } from "../slices/userSlice";

export default function HomeLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  async function handleFetch() {
    try {
      const res = await axios.get(`${BASE_URL}/auth/info`, {
        withCredentials: true,
      });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "success") {
        dispatch(setUser(data.admin));
      } else {
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/auth/login");
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user]);
  return (
    <div className="flex gap-2 w-full">
      <div>
        <SideBar />
      </div>
      <div className="w-full">
        <Header />
        <div className="py-7 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
