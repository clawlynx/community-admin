import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { toast } from "react-toastify";

const useEditEmployer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const editEmployer = async ({
    founded,
    companyName,
    companyEmail,
    companyContact,
    companyAddress,
    state,
    country,
    industry,
    facebook,
    twitter,
    linkedin,
    website,
    size,
    about,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/jobportal/employers/${id}`,
        {
          founded,
          companyName,
          companyEmail,
          companyContact,
          companyAddress,
          state,
          country,
          industry,
          facebook,
          twitter,
          linkedin,
          website,
          size,
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
        navigate(`/job-portal/employers/${id}`);
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
  return { loading, editEmployer };
};

export default useEditEmployer;
