import { useState, useEffect } from "react";
import { getData } from "./fakeAPI/getData";
import "./App.css";
import Card from "./components/Card/Card";

// App.js
// Description: This is the main component of the application.
// Display the title 'Mes Contacts' and the list of users.
// Data is fetched from the fakeAPI on componentDidMount.
// user state contains the list of users.
// isLoading state contains the status of the fetching process.

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
