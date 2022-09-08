import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ existingUsers, handleLogin, fetchUserFavoriteArtworks }) {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const history = useHistory();

  function onLogin(e) {
    e.preventDefault();

    if (usernameField === "" || passwordField === "") {
      alert("Please do not leave your username or password empty!");
      return null;
    }

    const authenticatedUser = existingUsers.find(
      (existingUser) =>
        (existingUser.username === usernameField) &
        (existingUser.password === passwordField)
    );
    if (authenticatedUser !== undefined) {
      console.log(authenticatedUser);
      handleLogin(authenticatedUser);
      fetchUserFavoriteArtworks(authenticatedUser);
      setUsernameField("");
      setPasswordField("");
      history.push(`/home/discover`);
    } else {
      alert(
        "Incorrect username and password combination! Our usernames and passwords are case sensitive. Please try again!"
      );
    }
  }

  return (
    <div className="mb-6 shadow-lg">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-6 px-16">
        <form onSubmit={(e) => onLogin(e)}>
          <div>
            <input
              type="username"
              className="w-full p-2 text-slate-700 border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              id="username"
              placeholder="Your Username"
              onChange={(e) => {
                setUsernameField(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2  border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              id="password"
              placeholder="Your Password"
              onChange={(e) => {
                setPasswordField(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <button
              type="submit"
              onClick={(e) => {}}
              className="hover:opacity-90 bg-orange-400 pt-2 pb-3 px-6 lg:py-3 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"
            >
              Login
            </button>
          </div>
        </form>
        <div className="border border-primaryBorder my-6"></div>
        <div className="flex justify-center items-center">
          <button
            onClick={(e) => {
              history.push(`/signup`);
            }}
            className="hover:opacity-90 bg-orange-700 pt-2 pb-3 px-6 lg:py-3 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
