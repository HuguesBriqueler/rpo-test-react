import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("fakeData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setUsers(myJson);
        setIsLoading(false);
      });
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
