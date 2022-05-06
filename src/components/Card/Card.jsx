import styles from "./Card.module.css";
import remove from "./remove.svg";
import { sortByLastName } from "../utils/sortByLastName";
// Card component
// This component is used to display a user's card informations
// It takes a user object and a setUsers function as props
// It displays the user's informations in a card
// It allows to edit the user's informations
// It also displays a button to delete the user

function Card({ user, setUsers }) {
  // This function handles user's informations edition
  // It takes the changed value from the name property of the event caller
  // it composes a new user object with the new value
  // then searches the user in the users array
  // and updates the user's informations with the sorted new user object
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...user, [name]: value };
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      const index = newUsers.indexOf(user);
      newUsers[index] = newData;
      sortByLastName(newUsers);
      return newUsers;
    });
  };

  // This function handles user's deletion
  // It searches the current user in the users array
  // and removes it
  const handleDelete = () => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      const index = newUsers.indexOf(user);
      newUsers.splice(index, 1);
      return newUsers;
    });
  };

  // Each input has a name property corresponding to the user's property
  // so that the handleChange function can update the correct informations
  return (
    <div className={styles.container}>
      <form>
        <ul>
          <li>
            <label htmlFor="lastName">Last name :</label>
            <input
              onChange={handleChange}
              type="text"
              name="last_name"
              id="lastName"
              value={user.last_name}
            />
          </li>
          <li>
            <label htmlFor="firstName">First name :</label>
            <input
              onChange={handleChange}
              type="text"
              name="first_name"
              id="firstName"
              value={user.first_name}
            />
          </li>
          <li>
            <label htmlFor="email">Email :</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              value={user.email}
            />
          </li>
        </ul>
        <button type="button" onClick={handleDelete}>
          <img src={remove} alt="delete" />
        </button>
      </form>
    </div>
  );
}

export default Card;
