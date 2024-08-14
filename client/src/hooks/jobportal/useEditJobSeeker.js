import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const useEditJobSeeker = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editJobSeeker = async ({
    fullName,
    role,
    experience,
    skills,
    qualification,
    location,
    portfolio,
    languages,
    github,
    expected,
    current,
    about,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/jobportal/jobseekers/${id}`,
        {
          fullName,
          role,
          experience,
          skills,
          qualification,
          location,
          portfolio,
          languages,
          github,
          expected,
          current,
          about,
        },
        { withCredentials: true }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "success") {
        toast.success("Updated successfully");
        navigate(`/job-portal/candidates/${id}`);
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
  return { loading, editJobSeeker };
};

export default useEditJobSeeker;
