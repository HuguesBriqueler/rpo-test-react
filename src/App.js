import { useState } from "react";
import { usersData } from "./fakeServer/fakeData";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [users, setUsers] = useState(usersData);

  return (
    <>
      <div className="app-container">
        <h1>Mes Contacts</h1>
        <div className="user-list">
          {users.map((user) => (
            <Card key={user.id} user={user} setUsers={setUsers} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
