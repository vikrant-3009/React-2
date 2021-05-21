import { useState } from "react";

import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import UserDataList from "./components/UserDataList/UserDataList";

function App() {
  const [userData, setUserData] = useState([
    { userName: "Vikrant Katoch", userAge: 19, id: "u1" },
    { userName: "Vivek Yadav", userAge: 20, id: "u2" },
  ]);

  const addUserData = (enteredName, enteredAge) => {
    setUserData((prevData) => {
      const updatedData = [...prevData];
      updatedData.unshift({
        userName: enteredName,
        userAge: parseInt(enteredAge),
        id: Math.random().toString(),
      });
      return updatedData;
    });
  };

  let content = <p>No User Data found!</p>;

  if (userData.length > 0) {
    content = <UserDataList users={userData} />;
  }

  return (
    <div>
      <section className="user-form">
        <UserInput onAddData={addUserData} />
      </section>
      <section className="user">{content}</section>
    </div>
  );
}

export default App;
