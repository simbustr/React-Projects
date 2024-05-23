import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
    console.log("Profile Image:", profileImage);

    const url = `https://node-user-curd.vercel.app/api/users/`;

    const formPayload = new FormData();
    formPayload.append("firstName", formData.firstName);
    formPayload.append("email", formData.email);
   
    if (profileImage) {
      formPayload.append("profileImage", profileImage);
    }

    // Log form data entries for debugging
    for (let [key, value] of formPayload.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`Network response was not ok: ${errorDetail}`);
      }

      const result = await response.json();
      console.log(result, "Success");
    } catch (error) {
      console.error("Failed to add data:", error);
    }
  };

  const handleChange = (event) => {
    const { value, name, type, files } = event.target;

    if (type === "file") {
      setProfileImage(files[0]);
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    console.log(value, "Changed");
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div className="form-wrp-main">
          <div className="left-wrp">
            <div className="form-group">
              <label>First Name: </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Profile Image: </label>
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
