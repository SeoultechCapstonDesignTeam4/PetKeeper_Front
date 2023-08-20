import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]); // Store the response data in the component's state

  const authToken = localStorage.getItem('token');

// Define your Axios instance with default headers
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json', // Set the content type as needed
      'Authorization': `Bearer ${authToken}`, // Include the token in the 'Authorization' header
    },
  });

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        axiosInstance.get('/user')
        .then((response) => {
          let data = response.data;
          console.log(data.p_pets[0].PET_ID);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h1>Response Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
