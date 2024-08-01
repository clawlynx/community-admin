import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const register = async ({ username, email, password, confirmPassword }) => {
    const success = handleInputErrors({
      username,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/auth/register`,
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      );

      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "successfully registered") {
        toast.success("Registered successfully");
        navigate("/auth/login");
      } else {
        toast.error(data.msg);
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, register };
};

export default useRegister;

function handleInputErrors({ username, email, password, confirmPassword }) {
  if (!username || !email || !password || !confirmPassword) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords does not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }
  return true;
}
