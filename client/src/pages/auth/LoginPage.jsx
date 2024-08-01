import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import Loading from "../../components/Loading";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  async function handleClick(e) {
    e.preventDefault();
    await login({ email, password });
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5 p-4 lg:border-0 border border-white rounded-md">
        <div className=" w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Community App Admin
          </h1>
        </div>

        <h2 className="text-xl lg:text-2xl my-3 font-medium">Login</h2>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label htmlFor="emailid" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="emailid"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="passwordid" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="passwordid"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleClick}
            disabled={loading}
            className="my-3 py-3 bg-teal-900 text-neutral-200 rounded-md hover:bg-teal-800"
          >
            Login
          </button>
          {loading && <Loading />}
        </form>

        <p className="my-3">
          Not have an account?{" "}
          <Link to="/auth/register" className="text-blue-700 underline">
            Register
          </Link>
        </p>
        <p className="my-3">
          <Link to="/auth/forgot-password" className="text-blue-700 underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}
