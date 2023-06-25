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
    <div>
      <h4>All Users</h4>
      {allUsers.map((user) => (
        <div key={user.id}>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.address}</span>
          <span>{user.phone}</span>
          <span>{user.gender}</span>
        </div>
      ))}
    </div>
  );
};

export default GetUsers;
