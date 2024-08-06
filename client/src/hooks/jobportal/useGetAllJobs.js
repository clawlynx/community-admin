import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

function useGetAllJobs() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/jobs`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setJobs(data.jobs);
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
    getJobs();
  }, []);
  return { loading, jobs };
}

export default useGetAllJobs;
