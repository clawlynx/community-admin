import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "logged in successfully") {
        toast.success("login success");
        navigate("/");
        dispatch(setUser(data.admin));
      } else {
        toast.error(data.msg);
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "somrthing went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
