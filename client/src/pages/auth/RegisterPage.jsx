import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/auth/useRegister";
import Loading from "../../components/Loading";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, register } = useRegister();
  async function handleSubmit(e) {
    e.preventDefault();
    await register({ username, email, password, confirmPassword });
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-4/5 p-4 lg:border-0 border border-ascent rounded-md">
        <div className="w-full text-center mb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Community App Admin
          </h1>
        </div>

        <h2 className="text-xl lg:text-xl my-3 font-medium">Register</h2>
        <form className="flex flex-col w-full">
          <div className="form-row">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              name="re-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="my-3 py-3 bg-teal-900 text-neutral-200 rounded-md hover:bg-teal-800"
          >
            Register
          </button>
          {loading && <Loading />}
        </form>
        <p className="my-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
