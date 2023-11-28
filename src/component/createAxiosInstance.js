import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';

const createAxiosInstance = () => {
  const authToken = secureLocalStorage.getItem('token');
  
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
  });
};

export default createAxiosInstance;
