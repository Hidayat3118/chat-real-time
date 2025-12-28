'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import {toast} from "sonner";
export default function Testing() {
  const tekan = () => {
    toast.success('notifikasi berhasil');
  }
  return (
    <div className="flex justify-center mt-32">
     <button onClick={tekan} className="bg-blue-500 text-white font-semibold py-2 px-3 w-24 mx-auto hover:bg-blue-600 cursor-pointer">Klik</button>
    </div>
  );
}
