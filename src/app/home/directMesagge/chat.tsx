import React, { useContext, useEffect, useState } from "react";
import { FiUserPlus, FiPlus, FiGift, FiSmile } from "react-icons/fi";
import { UserContext } from "@/providers/userProvider";
import { db } from "@/lib/firebase";
import ChatInput from "./component/chatInput";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

// Ambil roomId dari props (Next.js app router)
type ChatProps = {
  params: { roomId: string };
};

const Chat = (props: ChatProps) => {
  const { user } = useContext(UserContext);
  const params = props?.params || {};
  const roomId = params?.roomId;
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  // Listener Real-time
  useEffect(() => {
    if (!roomId) return;
    const q = query(
      collection(db, "rooms", roomId, "messages"),
      orderBy("createdAt", "asc")
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

  // Kirim Pesan
  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!text.trim() || !user || !roomId) return;
    await addDoc(collection(db, "rooms", roomId, "messages"), {
      text,
      senderId: user.uid,
      createdAt: serverTimestamp(),
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    setText("");
  };

  return (
    <div className="flex flex-col flex-1  justify-end">
      <div className="">
        {/* CHAT CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* PROFILE HEADER */}
          <div className=" gap-6 mb-8">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full"
            />

            <div className="mt-4 space-y-3">
              <h1 className="text-3xl font-bold ">Dayat</h1>
              <p className="text-white text-2xl">dayat3118</p>

              <p className="text-white mt-3 text-base">
                This is the beginning of your direct message history with{" "}
                <span className="text-white font-semibold">Dayat</span>.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-white text-sm">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      className="w-6 h-6 rounded-full border-2 border-[#1e1f22]"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      className="w-6 h-6 rounded-full border-2 border-[#1e1f22]"
                    />
                  </div>
                  <span>4 Mutual Servers</span>
                </div>

                <button className="bg-[#5865f2] hover:bg-[#4752c4] px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                  Add Friend
                </button>

                <button className="bg-[#2b2d31] hover:bg-[#3a3c41] px-4 py-2 rounded-md text-sm font-medium">
                  Block
                </button>
              </div>
            </div>
          </div>

          {/* DATE */}
          <div className="text-center text-gray-500 text-sm my-6">
            17 Februari 2026
          </div>

          {/* MESSAGE */}
          <div className="flex gap-4 hover:bg-[#2b2d31]/40  rounded-md transition">
            <img
              src="https://i.pravatar.cc/50"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">pacarnya changli</span>
                <span className="text-gray-500 text-sm">08.46</span>
              </div>
              <p className="text-gray-300 text-lg">tes</p>
            </div>
          </div>
        </div>

        {/* MESSAGE INPUT */}
        <form onSubmit={sendMessage} className="p-4 mb-13">
          <div className="flex items-center bg-primary-500 rounded-lg px-4 py-4 h-[59px] border border-white/5">
            <FiPlus className="text-gray-400 text-xl mr-4 hover:text-white cursor-pointer" />
            <input
              type="text"
              placeholder="Message @Dayat"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button type="submit" style={{ display: 'none' }} aria-label="Kirim" />
            <div className="flex items-center gap-5 text-gray-400 text-xl ml-4">
              <FiGift className="hover:text-white cursor-pointer" />
              <FiSmile className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
