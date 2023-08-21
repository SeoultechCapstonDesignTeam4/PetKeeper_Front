function User({user}){
  return(
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
}
export default User;