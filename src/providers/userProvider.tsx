'use client';

import { useState, createContext,  useEffect } from "react";
import React from "react";
import {auth} from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Buat context
export const UserContext = createContext<any>(null);

// Buat provider
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  // tangkap data dari firebase
  useEffect(() => {
   

    const unsubscribe = onAuthStateChanged(auth, () => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
