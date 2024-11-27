import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './Components/Header';
import UserCard from './Components/userCard';

const App = () => {
  const [user, setUser] = useState(null);

  // Function to fetch new user data
  const fetchNewUser = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]); // Set new user
      })
      .catch((error) => console.error('Error fetching user data:', error));
  };

  // Fetch user data on initial render
  useEffect(() => {
    fetchNewUser();
  }, []); // Empty array ensures it runs only once after the component mounts

  return (
    <>
      <Header />
      <div className="main">
        {user ? <UserCard user={user} /> : <p>Loading...</p>}
        <button className="next-button" onClick={fetchNewUser}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
