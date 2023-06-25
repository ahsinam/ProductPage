import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services/user";

interface IUser {
  id: number;
  username: string;
  email: string;
  address: string;
  phone: string;
  gender: string;
}

const GetUsers = () => {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchUser();

      setAllUsers(data);
    })();
  }, []);

  return (
    <div className="users-container flexBox">
      {allUsers.map((user) => (
        <div key={user.id} className="user-container column-flexBox">
          <div className="user-name">{user.username}</div>
          <div>
            <span> Email: </span>
            {user.email}
          </div>
          <div>
            <span>Address: </span>
            {user.address}
          </div>
          <div>
            <span> Contact: </span>
            {user.phone}
          </div>
          <div>
            <span> Gender: </span>
            {user.gender}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetUsers;
