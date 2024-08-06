import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetJobSeekers = () => {
  const [loading, setLoading] = useState(false);
  const [jobseekers, setJobseekers] = useState([]);

  useEffect(() => {
    const getJobSeekers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/jobseekers`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setJobseekers(data.candidates);
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
    getJobSeekers();
  }, []);
  return { loading, jobseekers };
};

export default useGetJobSeekers;
