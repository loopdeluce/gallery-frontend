import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewUserForm({ existingUsers, postNewUser, handleLogin }) {
  const [firstNameField, setFirstNameField] = useState("");
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const history = useHistory();

  function registerNewUser(e) {
    e.preventDefault();

    if (usernameField === "" || passwordField === "" || firstNameField === "") {
      alert("Pease do not leave any information empty!");
      return null;
    }

    const existingUsername = existingUsers.find(
      (existingUser) => existingUser.username === usernameField
    );
    if (existingUsername !== undefined) {
      alert(
        "Username already exists! Our usernames are case sensitive. Please try again!"
      );
    } else {
      const newUser = {
        username: usernameField,
        first_name: firstNameField,
        password: passwordField,
      };
      postNewUser(newUser);
      handleLogin(newUser);
      setUsernameField("");
      setPasswordField("");
      history.push("/home/discover");
    }
  }

  return (
    <div className="mb-6 shadow-lg">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-16">
        <h1 className="text-2xl font-medium text-gray-700 mt-2 text-center">
          Create an Account
        </h1>
        <h2 className="text-s text-gray-700 mb-4 text-center">
          It's quick and easy.
        </h2>
        <div className="border border-primaryBorder my-6"></div>
        <form onSubmit={(e) => registerNewUser(e)}>
          <div>
            {/* <label htmlFor="Field">First name</label> */}
            <input
              type="firstName"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              id="firstName"
              placeholder="First name"
              onChange={(e) => {
                setFirstNameField(e.target.value);
              }}
            />
          </div>
          <div>
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="username"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50`}
              id="username"
              placeholder="Username"
              onChange={(e) => {
                setUsernameField(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 bg-slate-50"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPasswordField(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <button
              type="submit"
              onClick={registerNewUser}
              className="hover:opacity-90 bg-orange-700 pt-2 pb-3 px-6 lg:py-3 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewUserForm;
