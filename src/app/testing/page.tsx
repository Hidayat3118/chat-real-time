"use client";
import VoiceSetting from "@/components/Ori/voiceSetting";
import Profil from "@/components/sidebar/profil";
import React, { useState } from "react";
import { toast } from "sonner";

const Testing = () => {
  const [rotasi, setRotasi] = useState<boolean>(false);
  return (
    <VoiceSetting text="Voice Settings"/>
  );
};

export default Testing;
