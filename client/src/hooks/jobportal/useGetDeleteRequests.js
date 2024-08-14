import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetDeleteRequests = () => {
  const [loading, setLoading] = useState(false);
  const [employers, setEmployers] = useState([]);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const getDeleteRequests = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/delete-requests`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setEmployers(data.employers);
          setCandidates(data.candidates);
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
    getDeleteRequests();
  }, []);
  return { loading, employers, candidates };
};

export default useGetDeleteRequests;
