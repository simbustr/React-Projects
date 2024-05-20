import React from "react";

// user-form
// form-group

const UserForm = () => {
  return (
    <div className="user-form">
      <form>
        <div className="form-wrp-main">
          <div className="left-wrp">
            {" "}
            <div className="form-group">
              <label>First Name: </label>
              <input type="text" name="firstName" />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Profile Image: </label>
              <input type="file" name="profileImage" />
            </div>
            <div className="form-group">
              <label>CV: </label>
              <input type="file" name="cv" />
            </div>
            <div className="form-group">
              <label>Date of Birth: </label>
              <input type="date" name="dateOfBirth" />
            </div>
            <div className="form-group">
              <label>Gender: </label>
              <select name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="right-wrp">
            <div className="form-group">
              <label>Job Role: </label>
              <input type="text" name="jobRole" />
            </div>
            <div className="form-group">
              <label>Start Date: </label>
              <input type="date" name="startDate" />
            </div>
            <div className="form-group">
              <label>End Date: </label>
              <input type="date" name="endDate" />
            </div>

            <div className="form-group">
              <label>Preferred Meeting Time: </label>
              <input type="time" name="Preferred_Meeting_Time" />
            </div>

            <div className="form-group form-check">
              <label>Subscribe to Newsletter: </label>
              <input type="checkbox" name="Subscribe_Newsletter" />
            </div>

            <div className="form-group">
              <label>Interests: </label>
              <input type="text" name="interests" />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
