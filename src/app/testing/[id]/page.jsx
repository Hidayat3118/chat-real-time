"use client";
import { useParams } from "next/navigation";
import { users } from "../data/user";

const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id == id);
  return (
    <div>
      <p>UserDetails</p>
      <p>{user.id}</p>
      <p>{user.nama}</p>
    </div>
  );
};

export default UserDetails;
