import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetSingleJobSeeker = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const getSingleCandidate = async () => {
      if (id === undefined || id === null) return;
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/jobseekers/${id}`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setCandidate(data.candidate);
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
    getSingleCandidate();
  }, []);
  return { loading, candidate };
};

export default useGetSingleJobSeeker;
