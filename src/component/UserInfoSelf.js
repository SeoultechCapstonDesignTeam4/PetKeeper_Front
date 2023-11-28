import React from 'react';
import secureLocalStorage from 'react-secure-storage';
import User from './User';
import Pets from './Pets';

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
