import React, { useEffect, useState } from "react";

import ListUser from "./ListUser";
import FormInput from "./FormInput";
import { GetUserData } from "../utils/data";
import { Sort } from "./Sort";
function formPage() {
  const [user, setUser] = useState(GetUserData);

  console.log(user);
  useEffect(() => {
    console.log("Updated User state:", user);
  }, [user]);

  const addUser = (newUser) => setUser((prevUsers) => [...prevUsers, newUser]);
  const deleteUser = (id) =>
    setUser((prevUser) => prevUser.filter((user) => user.id !== id));
  return (
    <>
      
      <ListUser data={user} deleteUser={deleteUser}/>
      <div className="form">
        <FormInput addUser={addUser}/>
      </div>
    </>
  );
}

export default formPage;
