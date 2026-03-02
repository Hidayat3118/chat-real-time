"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db, auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";

export default function RoomPage() {
  const params = useParams();
  const roomId = params.roomId as string;

  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  // ambil user login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);
  // realtime listener
  useEffect(() => {
    if (!roomId) return;

    const q = query(
      collection(db, "chats", roomId, "messages"),
      orderBy("createdAt", "asc"),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, [roomId]);

  const sendMessage = async () => {
    if (!text.trim() || !user) return;

    await setDoc(
      doc(db, "chats", roomId),
      {
        participants: roomId.split("_"),
        lastMessage: text,
        lastTimestamp: serverTimestamp(),
      },
      { merge: true },
    );

    await addDoc(collection(db, "chats", roomId, "messages"), {
      text,
      senderId: user.uid,
      createdAt: serverTimestamp(),
    });

    setText("");
  };

  if (!user) return <div>Harus login dulu</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat</h2>

      <div
        style={{
          height: 300,
          overflowY: "auto",
          border: "1px solid #ccc",
          marginBottom: 10,
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.senderId === user.uid ? "right" : "left",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                background: "#eee",
                padding: "5px 10px",
                borderRadius: 5,
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ketik pesan..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button>Kirim</button>
    </div>
  );
}
