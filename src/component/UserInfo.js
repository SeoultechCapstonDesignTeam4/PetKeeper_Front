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

  const deleteUser = () => {
    try{
      axiosInstance.delete(`/user/${id}`).
      then((response) => {
        console.log(response);
        alert('회원 삭제 완료');
        window.location.href = '/userList';
      }).catch((error) => {
        console.error('Error:', error);
        alert('회원 삭제 실패');
      });
    }catch(err){

    }
    // Delete user logic here
  };

  const handleDeleteClick = () => {
    // Show a confirmation prompt
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');

    // If the user confirms, proceed with deletion
    if (confirmDelete) {
      deleteUser();
    }
  };

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
      <button onClick={handleDeleteClick}>Delete User</button>
    </div>
  );
};

export default UserInfo;
