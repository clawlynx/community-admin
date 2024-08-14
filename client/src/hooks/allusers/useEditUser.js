import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const useEditUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editUser = async ({
    age,
    dateOfBirth,
    email,
    phone,
    username,
    hobbies,
    interest,
    gender,
    smoking,
    drinking,
    address,
    highestQualification,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/allUsers/${id}`,
        {
          age,
          dateOfBirth,
          email,
          phone,
          username,
          hobbies,
          interest,
          gender,
          smoking,
          drinking,
          address,
          highestQualification,
        },
        { withCredentials: true }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "success") {
        toast.success("Updated successfully");
        navigate(`/all-users/${id}`);
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
  return { loading, editUser };
};

export default useEditUser;
