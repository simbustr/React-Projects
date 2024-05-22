import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const UserProfile = ({ user }) => {
  return (
    <div>
        <ProfilePicture imageUrl={user.imageUrl} alt="kkkk" />
      <ProfileDetails name={user.name} username={user.username} email={user.email} />
    </div>
  )
}

export default UserProfile
