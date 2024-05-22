import React from 'react'
import UserProfile from './UserProfile'

const user = {
    id: 1,
    name: 'Simbu',
    username: 'simbu.dev',
    email: 'simbu@example.com',
    imageUrl: 'https://via.placeholder.com/150'
  };

const UserProfilePage = () => {
  return (
    <div>
        <h1>User Profile</h1>
      <UserProfile user={user} />
    </div>
  )
}

export default UserProfilePage
