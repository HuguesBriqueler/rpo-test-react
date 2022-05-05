import { useState, useEffect } from "react";
import { getData } from "./fakeAPI/getData";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData({ setUsers, setIsLoading });
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Mes Contacts</h1>
        <div className="user-list">
          {!isLoading &&
            users.map((user) => (
              <Card key={user.id} user={user} setUsers={setUsers} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
