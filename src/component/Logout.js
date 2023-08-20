import React from 'react';
import secureLocalStorage from 'react-secure-storage';
function Logout() {

  const handleLogout = () => {
    // Clear user session or token (e.g., remove it from local storage)
    secureLocalStorage.removeItem('token'); // Assuming you use 'token' for authentication
    window.location.href = '/login';
    // Redirect to the login page or any other destination
  };
  if(secureLocalStorage.getItem('token')){
    return (
      <div>
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }else{
    return (
      <div>
        <h2>Logout</h2>
        <p>You are not logged in.</p>
      </div>
    );
  }

}

export default Logout;
