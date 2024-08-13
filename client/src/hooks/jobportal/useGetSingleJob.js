import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetSingleJob = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState(null);
  useEffect(() => {
    const getSingleJob = async () => {
      if (id === undefined || id === null) return;
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/jobs/${id}`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setJob(data.job);
        } else {
          console.log(data.msg);
        }
      } catch (err) {
        console.log(
          err?.response?.data?.msg || err?.error || "somrthing went wrong"
        );
      } finally {
        setLoading(false);
      }
    };
    getSingleJob();
  }, []);
  return { loading, job };
};

export default useGetSingleJob;
