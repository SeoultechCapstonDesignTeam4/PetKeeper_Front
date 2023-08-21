function Pets({user}){
  return(
    <div>
      <ul>
        {user.p_pets && user.p_pets.length > 0 ? (
          user.p_pets.map(pet => (
            <li key={pet.PET_ID}>
              <p>Pet Name: {pet.PET_NAME} {pet.PET_ID}</p>
              <p>Pet Kind: {pet.PET_KIND}</p>
              <img src={pet.PET_IMAGE} alt="Pet" />
            </li>
          ))
        ) : (
          <p>No pets available.</p>
        )}
      </ul>
    </div>
  )
}

export default Pets;