"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import { FiPlus, FiGift, FiSmile } from "react-icons/fi";
import { useParams } from "next/navigation";
import { db, auth } from "@/lib/firebase";
import { getDoc } from "firebase/firestore";
import { FaGift } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { BiSolidShapes } from "react-icons/bi";
import { FaFaceGrinSquint } from "react-icons/fa6";
import { FaNoteSticky } from "react-icons/fa6";
import IconHover from "./component/iconHover";
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
import { UserContext } from "@/providers/userProvider";

type UserData = {
  displayName: string;
  userName: string;
  email: string;
  month?: string;
  day?: string;
  year?: string;
};

const Chat = () => {
  const { user, setUser } = useContext(UserContext);
  const params = useParams();
  const roomId = params.roomId as string;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [otherUserData, setOtherUserData] = useState<UserData | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ambil data user lawan chat
  useEffect(() => {
    if (!user || !roomId) return;
    const ids = roomId.split("_");
    const otherUserId = ids.find((id) => id !== user.uid);
    if (!otherUserId) return;
    const fetchOtherUser = async () => {
      const docSnap = await getDoc(doc(db, "users", otherUserId));
      if (docSnap.exists()) setOtherUserData(docSnap.data() as UserData);
    };
    fetchOtherUser();
  }, [user, roomId]);

  // ...existing code...
  useEffect(() => {
    if (!user) return;
    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data() as UserData); // userData.userName bisa dipakai
      }
    };
    fetchUserData();
  }, [user]);

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

  // auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // kirim pesan
  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!text.trim() || !user) return;

    // update room info
    await setDoc(
      doc(db, "chats", roomId),
      {
        participants: roomId.split("_"),
        lastMessage: text,
        lastTimestamp: serverTimestamp(),
      },
      { merge: true },
    );

    // tambah message
    await addDoc(collection(db, "chats", roomId, "messages"), {
      text,
      senderId: user.uid,
      senderName: user.displayName || user.email || "Unknown",
      createdAt: serverTimestamp(),
    });

    setText("");
  };
  // ambil data teman chat berdasarkan roomId
  useEffect(() => {
    if (!user || !roomId) return;
    const ids = roomId.split("_");
    const otherUserId = ids.find((id) => id !== user.uid);
    if (!otherUserId) return;
    const fetchOtherUser = async () => {
      const docSnap = await getDoc(doc(db, "users", otherUserId));
      if (docSnap.exists()) setOtherUserData(docSnap.data() as UserData);
    };
    fetchOtherUser();
  }, [user, roomId]);

  // ambil data user sendiri
  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
        console.log("USER DATA:", docSnap.data());
      } else {
        console.log("User tidak ditemukan");
      }
    };

    fetchUser();
  }, [user]);

  // kondisional rendering
  if (!user) return <div className="text-center py-10">Harus login dulu</div>;

  return (
    <div className="flex flex-col h-full">
      {/* CHAT CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        {/* PROFILE HEADER */}
        <div className="grid gap-6 mb-8">
          <img
            src={otherUserData?.photoURL}
            className="w-20 h-20 rounded-full shrink-0"
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">
              {otherUserData?.displayName || "User"}
            </h1>
            <p className="text-white text-2xl">
              {otherUserData?.userName || "-"}
            </p>
            <p className="text-gray-300 text-lg">
              This is the beginning of your direct message history with{" "}
              <span className="font-semibold">
                {otherUserData?.displayName || "User"}
              </span>
              .
            </p>
          </div>
          <div className="flex items-center gap-4  px-4 py-3 rounded-md w-fit">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1e1f22]">
                <img
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=user1"
                  alt="avatar1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#1e1f22]">
                <img
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=user2"
                  alt="avatar2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mutual Text */}
            <p className="text-sm text-zinc-300">
              <span className="font-semibold text-white">4</span> Mutual Servers
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 font-semibold cursor-pointer text-sm rounded-md bg-indigo-500 hover:bg-indigo-600 transition">
                Add Friend
              </button>

              <button className="px-4 py-2 font-semibold cursor-pointer text-sm rounded-md bg-primary-400 hover:bg-primary-300 transition">
                Block
              </button>
            </div>
          </div>
        </div>

        {/* DATE */}
        <div className="text-center text-gray-300 text-sm my-6">
          17 Februari 2026
        </div>

        {/* MESSAGE LIST */}
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-4">
              <img
                src={
                  msg.senderId === user.uid
                    ? userData?.photoURL || "/default-avatar.png"
                    : otherUserData?.photoURL || "/default-avatar.png"
                }
                className="w-10 h-10 rounded-full shrink-0"
                alt="avatar"
              />

              <div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg">
                    {msg.senderId === user.uid
                      ? user.displayName
                      : otherUserData?.displayName ||
                        msg.senderName ||
                        "Unknown"}
                  </span>
                </div>

                <p className="text-gray-300 text-lg wrap-break-word">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* MESSAGE INPUT */}
      <form className="p-4 border-t border-white/5" onSubmit={sendMessage}>
        <div className="flex items-center bg-primary-500 rounded-lg px-4 py-4 h-[59px] border border-white/5">
          <FiPlus className="text-gray-300 text-2xl mr-4 hover:text-white cursor-pointer" />

          <input
            type="text"
            placeholder={`Message @${otherUserData?.displayName}`}
            className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex items-center gap-5 text-gray-400 text-xl ml-4">
            {/* <FaGift className="hover:text-white cursor-pointer" /> */}
            <IconHover
              textContent="Gift"
              Icon={<FaGift className="hover:text-white cursor-pointer" />}
            />
            <IconHover
              textContent="GIF"
              Icon={
                <MdGifBox className="hover:text-white cursor-pointer text-2xl" />
              }
            />
            <IconHover
              textContent="Note"
              Icon={
                <FaNoteSticky className="hover:text-white cursor-pointer" />
              }
            />
            <IconHover
              textContent="Emoji"
              Icon={
                <FaFaceGrinSquint className="hover:text-white cursor-pointer" />
              }
            />
            <IconHover
              textContent="Shapes"
              Icon={
                <BiSolidShapes className="hover:text-white cursor-pointer" />
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chat;
