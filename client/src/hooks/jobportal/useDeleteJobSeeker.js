import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

function useDeleteJobSeeker() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const deleteJobSeeker = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${BASE_URL}/jobportal/jobseekers/${id}`, {
        withCredentials: true,
      });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      if (data.msg === "success") {
        toast.success("Deleted successfully");
        navigate(`/job-portal/candidates`);
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
  return { loading, deleteJobSeeker };
}

export default useDeleteJobSeeker;
