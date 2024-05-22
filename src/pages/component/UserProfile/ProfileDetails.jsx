import React from 'react'

const ProfileDetails = ({ name, username, email }) => {
  return (
    <div>
          <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default ProfileDetails
