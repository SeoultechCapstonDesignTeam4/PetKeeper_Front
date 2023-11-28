function User({ user }) {
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

    </div>
  );
}

export default User;
