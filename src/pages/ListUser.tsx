import { useState } from "react";
import UserCard from "./UserCard"
import { Sort } from "./Sort";

function ListUser({data, deleteUser}) {
     const [searchQuery, setSearchQuery] = useState("");
     const filteredUser = data.filter(
    (dataUser) =>
      dataUser.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataUser.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
   <>
     <div className="w-full flex justify-center items-center my-4 gap-2"> 
        <Sort />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3 my-2">
        {filteredUser.map((user) => (
          <UserCard key={user.id} user={user} deleteUser={deleteUser}/>
          ))}
    </div>
   </>
  )
}

export default ListUser