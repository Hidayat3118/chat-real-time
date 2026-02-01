"use client";
import Profil from "@/components/sidebar/profil";
import React, { useState } from "react";
import { toast } from "sonner";
const Testing = () => {
  const [rotasi, setRotasi] = useState<boolean>(false);
  return (
    <div className="flex justify-center mt-32 bg-primary-900">
      <Profil />
      <div onClick={() => setRotasi(!rotasi)}
        className={`bg-blue-500 text-white font-semibold p-2 h-20 w-20 flex items-center
           justify-center rounded-md ml-8 cursor-pointer ${rotasi ? 'rotate-180' : 'rotate-0'}`}
      >
        <p>coba aja</p>
      </div>
    </div>
  );
};

export default Testing;
