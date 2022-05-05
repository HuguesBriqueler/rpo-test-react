import styles from "./Card.module.css";
import remove from "./remove.svg";

function Card({ user, setUsers }) {
  console.log(user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...user, [name]: value };
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      const index = newUsers.indexOf(user);
      newUsers[index] = newData;
      return newUsers;
    });
  };

  const handleDelete = () => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      const index = newUsers.indexOf(user);
      newUsers.splice(index, 1);
      return newUsers;
    });
  };

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
