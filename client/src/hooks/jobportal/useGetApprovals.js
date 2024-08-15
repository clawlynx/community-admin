import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetApprovals = () => {
  const [loading, setLoading] = useState(false);
  const [approvals, setApprovals] = useState([]);
  useEffect(() => {
    const getApprovals = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/approvals`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setApprovals(data.approvals);
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
    getApprovals();
  }, []);
  return { loading, approvals };
};

export default useGetApprovals;
