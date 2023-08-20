import React, { useState, useEffect } from 'react';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';

const authToken = secureLocalStorage.getItem('token');

const User = ({ user }) => (
  <div>
    <h2>User Information</h2>
    <p>ID: {user.USER_ID}</p>
    <p>Email: {user.USER_EMAIL}</p>
    <p>Name: {user.USER_NAME}</p>
    <p>Phone: {user.USER_PHONE}</p>
    <p>Authorization: {user.USER_AUTH}</p>
    <img src={user.USER_IMAGE} alt="User's Profile" />
  </div>
)

const Pets = ({ user }) => (
  <div>
    <ul>
      {user.p_pets && user.p_pets.length > 0 ? (
        user.p_pets.map(pet => (
          <li key={pet.PET_ID}>
            <p>Pet Name: {pet.PET_NAME} {pet.PET_ID}</p>
            <p>Pet Kind: {pet.PET_KIND}</p>
            <img src={pet.PET_IMAGE} alt="Pet's Image" />
          </li>
        ))
      ) : (
        <p>No pets available.</p>
      )}
    </ul>
  </div>
)

function UserInfo() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
    });

    axiosInstance.get('/user')
      .then(async (response) => {
        await setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <User user={userData} />
      <Pets user={userData} />
    </div>
  );
}
export default UserInfo;
