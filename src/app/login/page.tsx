"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LayoutAuth from "@/layout/layoutAuth";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  // handle login
  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Berhasil Login");
      route.push("/testing");
    } catch (err) {
      console.log(err, "gagal login");
      toast.error("gagal Login");
    } finally {
      setLoading(true);
    }
  };
  return (
    <LayoutAuth>
      <div className="relative z-10 bg-neutral-700 rounded-lg shadow-2xl p-8 w-full max-w-3xl mx-4 animate-drop">
        <div className="grid grid-cols-10 justify-between items-start ">
          {/* Left side - Login Form */}
          <div className="flex-1 w-full md:w-auto col-span-6 pr-6">
            <div className="text-center">
              <h2 className="text-white text-2xl font-bold mb-2">
                Welcome back!
              </h2>
              <p className="text-gray-300 text-md mb-6">
                We're so excited to see you again!
              </p>
            </div>
            {/* konten input */}
            <div className="space-y-4">
              {/* email */}
              <div>
                <label className="block text-neutral-200 text-md font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* password */}
              <div className="">
                <label className="block text-neutral-200 text-md font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid">
                <a
                  href="#"
                  className="text-indigo-400 text-sm hover:underline inline-block -mt-3 mb-3"
                >
                  Forgot your password?
                </a>
                {/* button login */}
                <Button
                  type="submit"
                  disabled={loading}
                  onClick={handleLogin}
                  className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer my-3 "
                >
                  {loading ? <Spinner /> : "Log In"}
                </Button>
                <p className="text-gray-400 text-sm">
                  Need an account?{" "}
                  <Link
                    className="text-indigo-400 hover:text-indigo-500"
                    href="/register"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="col-span-4 items-center text-center">
            <div className="pl-4 ">
              <div className="flex justify-center p-4 rounded-lg mb-4">
                <Image
                  src="/qrcode.PNG"
                  width={170}
                  height={170}
                  alt="qrcode"
                />
              </div>

              <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                Log in with QR Code
              </h3>
              <p className="text-gray-300 text-md font-semibold">
                Scan this with the{" "}
                <span className="font-semibold">Discord mobile app</span> to log
                in instantly.
              </p>

              <button className="text-indigo-400 text-sm hover:underline mt-3 cursor-pointer">
                Or, sign in with passkey
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
