import React, { useState, useEffect } from 'react';
import User from './User';
import Pets from './Pets';
import { useParams } from 'react-router-dom';
import createAxiosInstance from './createAxiosInstance';

const axiosInstance = createAxiosInstance();

const UserInfo = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/user/${id}`);
        setUserData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <User user={userData} />
      <Pets user={userData} />
    </div>
  );
};

export default UserInfo;
