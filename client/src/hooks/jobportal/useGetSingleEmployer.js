import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetSingleEmployer = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    const getSingleEmployer = async () => {
      if (id === undefined || id === null) return;
      setLoading(true);
      try {
        const res = await axios.get(`${BASE_URL}/jobportal/employers/${id}`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setEmployer(data.employer);
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
    getSingleEmployer();
  }, []);
  return { loading, employer };
};

export default useGetSingleEmployer;
