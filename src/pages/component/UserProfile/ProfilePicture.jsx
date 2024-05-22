import React from "react";

const ProfilePicture = ({ imageUrl }) => {
  return (
    <div>
      <div>
        <img
          src={imageUrl}
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
