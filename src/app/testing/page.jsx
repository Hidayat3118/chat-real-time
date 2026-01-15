"use client";
import Link from "next/link";
import { users } from "./data/user"; 
const Testing = () => {
  
  return (
    <div className="mt-32 text-2xl flex justify-center gap-4">
      {users.map((user) => (
        <div key={user.id} className=" flex justify-center">
          <div className="font-semibold">{user.nama}</div>
          <Link href={`/testing/${user.id}`}>Lihat</Link>
        </div>
      ))}
    </div>
  );
};

export default Testing;
