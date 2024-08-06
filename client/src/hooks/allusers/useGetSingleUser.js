import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useGetSingleUser = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getSingleUser = async () => {
      if (id === undefined || id === null) return;
      setLoading(true);

      try {
        const res = await axios.get(`${BASE_URL}/allUsers/${id}`, {
          withCredentials: true,
        });
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        if (data.msg === "success") {
          setUser(data.user);
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
    getSingleUser();
  }, []);
  return { loading, user };
};

export default useGetSingleUser;
