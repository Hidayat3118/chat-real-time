"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { UserProvider } from "@/providers/userProvider";

export default function ChatPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const router = useRouter();

  // ambil user login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // ambil semua user
  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(data);
    };

    fetchUsers();
  }, []);
// mulai chat dengan teman
  const startChat = (friendId: string) => {
    const roomId = [currentUser.uid, friendId].sort().join("_");
    router.push(`/testing/chat/${roomId}`);
  };

  if (!currentUser) return <div>Harus login dulu</div>;
  console.log("current user:", currentUser);
 
  return (
    <div style={{ padding: 20 }}>
      <h2>Semua User</h2>

      {users
        .filter((user) => user.id !== currentUser.uid)
        .map((user) => (
          <div
            key={user.id}
            onClick={() => startChat(user.id)}
            style={{
              padding: 10,
              border: "1px solid #ccc",
              marginBottom: 8,
              cursor: "pointer",
            }}
          >
            {user.userName}
          </div>
        ))}
    </div>
  );
}
