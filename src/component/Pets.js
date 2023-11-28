function Pets({ user }) {
  return (
    <div>
      <table border={2}>
        <thead>
          <tr border={2}>
            <th>Pet Name</th>
            <th>Pet Kind</th>
            <th>Pet Image</th>
          </tr>
        </thead>
        <tbody>
          {user.p_pets && Array.isArray(user.p_pets) && user.p_pets.length > 0 ? (
            user.p_pets.map((pet) => (
              <tr key={pet.PET_ID}>
                <td>{pet.PET_NAME}</td>
                <td>{pet.PET_KIND}</td>
                <td>
                  <img src={pet.PET_IMAGE} width={200} height={200} alt="Pet" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No pets available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Pets;
