import React from "react";

const UserCard = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>; // Handle cases where the user prop is not available
  }

  return (
    <div className="user-card">
      <img src={user.picture.large} alt="User Profile" className="user-image" />
      <h2>
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p>
        <b>Gender:</b> {user.gender}
      </p>
      <p>
        <b>Age:</b> {user.dob.age}
      </p>
      <p>
        <b>DOB:</b> {new Date(user.dob.date).toLocaleDateString()}
      </p>
      <p>
        <b>Location:</b> {user.location.city}, {user.location.country}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
};

export default UserCard;
