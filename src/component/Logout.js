import React from 'react';

function Logout() {

  const handleLogout = () => {
    // Clear user session or token (e.g., remove it from local storage)
    localStorage.removeItem('token'); // Assuming you use 'token' for authentication
    window.location.href = '/login';
    // Redirect to the login page or any other destination
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
