import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";

const useGetEmployers = () => {
  const [loading, setLoading] = useState(false);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const getEmployers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(` ${BASE_URL}/jobportal/employers`, {
          withCredentials: true,
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setEmployers(data.employers);
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
    getEmployers();
  }, []);
  return { loading, employers };
};

export default useGetEmployers;
