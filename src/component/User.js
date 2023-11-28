import secureLocalStorage from "react-secure-storage";
import createAxiosInstance from "./createAxiosInstance";
import { useParams } from "react-router-dom";
function deleteUser(id) {
  const axiosInstance = createAxiosInstance();
  axiosInstance.delete(`/user/${id}`)
    .then((response) => {
      console.log(response);
      alert('회원 삭제 완료');
      window.location.href = '/userList';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('회원 삭제 실패');
    });
}

function User({ user }) {
  const { id } = useParams();

  const handleDeleteClick = () => {
    deleteUser(id);
  };

  return (
    <div className="user-container">
      <h2>User Information</h2>
      <div className="user-details">
        <p>
          <strong>ID:</strong> {user.USER_ID}
        </p>
        <div className="user-image-container">
          <img
            src={user.USER_IMAGE}
            alt="User's Profile"
            width={200}
            height={200}
            className="user-image"
          />
        </div>
        <p>
          <strong>Email:</strong> {user.USER_EMAIL}
        </p>
        <p>
          <strong>Name:</strong> {user.USER_NAME}
        </p>
        <p>
          <strong>Phone:</strong> {user.USER_PHONE}
        </p>
        <p>
          <strong>Authorization:</strong> {user.USER_AUTH}
        </p>
      </div>
      <div>
        {secureLocalStorage.getItem('USER_AUTH') === 'admin' && (
          <input type="button" value="회원 삭제" onClick={handleDeleteClick} />
        )}
      </div>
    </div>
  );
}

export default User;
