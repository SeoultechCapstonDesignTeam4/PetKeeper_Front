import React from 'react';
import secureLocalStorage from 'react-secure-storage';

// const authToken = secureLocalStorage.getItem('token');

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
  // const [userData, setUserData] = useState([]);
  const userData = {
    USER_ID: secureLocalStorage.getItem('USER_ID'),
    USER_EMAIL: secureLocalStorage.getItem('USER_EMAIL'),
    USER_NAME: secureLocalStorage.getItem('USER_NAME'),
    USER_PHONE: secureLocalStorage.getItem('USER_PHONE'),
    USER_AUTH: secureLocalStorage.getItem('USER_AUTH'),
    USER_IMAGE: secureLocalStorage.getItem('USER_IMAGE'),
    p_pets: JSON.parse(secureLocalStorage.getItem('p_pets')),
  }
  
  return (
    <div>
      <User user={userData} />
      <Pets user={userData} />
    </div>
  );
}
export default UserInfo;

// useEffect(() => {
//   const axiosInstance = axios.create({
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${authToken}`,
//     },
//   });

//   axiosInstance.get('/user')
//     .then(async (response) => {
//       await setUserData(response.data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행
