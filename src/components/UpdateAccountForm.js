import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UpdateAccountForm({ authenticatedUser, updateAuthenticatedUser }) {
  const [formData, setFormData] = useState(authenticatedUser);
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);
  }

  function patchUserUpdate() {
    return fetch(`http://127.0.0.1:4200/users/${authenticatedUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => response.json());
  }

  function updateAccount(event) {
    event.preventDefault();
    patchUserUpdate().then((updatedUser) => {
      updateAuthenticatedUser(updatedUser);
      alert("Your account has been updated!");
    });
  }

  return (
    <div className="mt-20 flex bg-grey-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-16">
        <h1 className="text-2xl font-medium text-primary mt-2 mb-6 text-center">
          Update Your Account Details
        </h1>

        <form onSubmit={updateAccount}>
          <div>
            <input
              type="firstName"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              name="first_name"
              placeholder="Your first name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="username"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              name="username"
              placeholder="Your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-100 ease-in-out mb-4 bg-slate-50"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center items-center mt-3">
            <button
              type="submit"
              className="hover:bg-orange-500 bg-orange-400 pt-2 pb-3 px-6 lg:py-3 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"
            >
              Update Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAccountForm;
