'use client'

import { auth } from "@/lib/firebase"
import { toast } from "sonner"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"

export default function Testing() {
const [email, setEmail] = useState("");
  const tekan = () => {
    toast.success('notifikasi berhasil')
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    })

    return () => unsub()
  }, [])

  return (
    <div className="flex justify-center mt-32">
      <button
        onClick={tekan}
        className="bg-blue-500 text-white font-semibold py-2 px-3 w-24 mx-auto hover:bg-blue-600 cursor-pointer"
      >
        Klik
       
      </button>
      <p> {email}</p>
    </div>
  )
}
