import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9002/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    navigate("/login");
  };

  return (
    <div>
      <form
        action="/signup"
        className="form"
        onSubmit={handleSubmit}
        method="POST"
      >
        <p className="title">Register</p>
        <p className="message">Sign up and get full access to our app.</p>

        <div className="flex">
          <label>
            <input
              type="text"
              className="Input"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              type="text"
              className="Input"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            type="email"
            className="Input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            type="password"
            className="Input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button className="submit" type="submit">
          {" "}
          Submit{" "}
        </button>

        <div className="inn">
          <p className="message">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
