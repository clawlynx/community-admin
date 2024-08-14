import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const useEditJob = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editJob = async ({
    jobTitle,
    category,
    address,
    deadline,
    qualification,
    experience,
    gender,
    location,
    type,
    salary,
    skills,
    desc,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/jobportal/jobs/${id}`,
        {
          jobTitle,
          category,
          address,
          deadline,
          qualification,
          experience,
          gender,
          location,
          type,
          salary,
          skills,
          desc,
        },
        { withCredentials: true }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "success") {
        toast.success("Updated successfully");
        navigate(`/job-portal/jobs/${id}`);
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
  return { loading, editJob };
};

export default useEditJob;
