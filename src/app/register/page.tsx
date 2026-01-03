"use client";
// notif
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import LayoutAuth from "@/layout/layoutAuth";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useState } from "react";
// import firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  // function register
  const handleRegister = async () => {
    try {
      const userCredetial = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredetial.user;
      await updateProfile(user, { displayName: displayName });
      // simpan data ke firebase
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        userName: userName,
        month: month,
        email: email,
        day: day,
        year: year,
        createdAt: new Date(),
      });
      toast.success("Berhasil Register");x``
      console.log("berhasil login");
    } catch (err) {
      console.log(err, "gagal register");
      toast.error("Gagal register");
    }
  };


  return (
    <LayoutAuth>
      <div className="w-full relative z-10 max-w-md bg-neutral-700 rounded-lg p-8 shadow-xl animate-drop">
        <h1 className="text-white text-2xl font-semibold text-center mb-6">
          Create an account
        </h1>

        {/* Email */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Display Name */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Display Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Username <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <Label className="text-white  font-bold mb-2">
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md px-3 py-5 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date of Birth */}
        <label className="block text-xs font-semibold text-gray-300 mb-3 ">
          Date Of Birth <span className="text-red-500">*</span>
        </label>
        <div className="mb-6 grid grid-cols-3 gap-4 text-neutral-300 ">
          {/* Month */}
          <div className="flex gap-2">
            <NativeSelect onChange={(e) => setMonth(e.target.value)} className="border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 h-11">
              <NativeSelectOption value="">Month</NativeSelectOption>
              <NativeSelectOption value="january">January</NativeSelectOption>
              <NativeSelectOption value="february">February</NativeSelectOption>
              <NativeSelectOption value="march">March</NativeSelectOption>
              <NativeSelectOption value="april">April</NativeSelectOption>
              <NativeSelectOption value="may">May</NativeSelectOption>
              <NativeSelectOption value="june">June</NativeSelectOption>
              <NativeSelectOption value="july">July</NativeSelectOption>
              <NativeSelectOption value="august">August</NativeSelectOption>
              <NativeSelectOption value="september">
                September
              </NativeSelectOption>
              <NativeSelectOption value="october">October</NativeSelectOption>
              <NativeSelectOption value="november">November</NativeSelectOption>
              <NativeSelectOption value="december">December</NativeSelectOption>
            </NativeSelect>
          </div>
          {/* day */}
          <div className="flex gap-2">
            <NativeSelect onChange={(e) => setDay(e.target.value)} className="border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 h-11">
              <NativeSelectOption value="">Date</NativeSelectOption>
              <NativeSelectOption value="1">1</NativeSelectOption>
              <NativeSelectOption value="2">2</NativeSelectOption>
              <NativeSelectOption value="3">3</NativeSelectOption>
              <NativeSelectOption value="4">4</NativeSelectOption>
              <NativeSelectOption value="5">5</NativeSelectOption>
              <NativeSelectOption value="6">6</NativeSelectOption>
              <NativeSelectOption value="7">7</NativeSelectOption>
              <NativeSelectOption value="8">8</NativeSelectOption>
              <NativeSelectOption value="9">9</NativeSelectOption>
              <NativeSelectOption value="10">10</NativeSelectOption>
              <NativeSelectOption value="11">11</NativeSelectOption>
              <NativeSelectOption value="12">12</NativeSelectOption>
              <NativeSelectOption value="13">13</NativeSelectOption>
              <NativeSelectOption value="14">14</NativeSelectOption>
              <NativeSelectOption value="15">15</NativeSelectOption>
              <NativeSelectOption value="16">16</NativeSelectOption>
              <NativeSelectOption value="17">17</NativeSelectOption>
              <NativeSelectOption value="18">18</NativeSelectOption>
              <NativeSelectOption value="19">19</NativeSelectOption>
              <NativeSelectOption value="20">20</NativeSelectOption>
              <NativeSelectOption value="21">21</NativeSelectOption>
              <NativeSelectOption value="22">22</NativeSelectOption>
              <NativeSelectOption value="23">23</NativeSelectOption>
              <NativeSelectOption value="24">24</NativeSelectOption>
              <NativeSelectOption value="25">25</NativeSelectOption>
              <NativeSelectOption value="26">26</NativeSelectOption>
              <NativeSelectOption value="27">27</NativeSelectOption>
              <NativeSelectOption value="28">28</NativeSelectOption>
              <NativeSelectOption value="29">29</NativeSelectOption>
              <NativeSelectOption value="30">30</NativeSelectOption>
              <NativeSelectOption value="31">31</NativeSelectOption>
            </NativeSelect>
          </div>

          {/* year */}
          <div className="flex gap-2">
            <NativeSelect onChange={(e) => setYear(e.target.value)} className="border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 h-11">
              <NativeSelectOption value="">Year</NativeSelectOption>
              <NativeSelectOption value="2023">2023</NativeSelectOption>
              <NativeSelectOption value="2024">2024</NativeSelectOption>
              <NativeSelectOption value="2025">2025</NativeSelectOption>
              <NativeSelectOption value="2026">2026</NativeSelectOption>
              <NativeSelectOption value="2027">2027</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-3">
          <Checkbox className="cursor-pointer" id="update" />
          <Label htmlFor="update" className="text-neutral-400 text-xs">
            (Optional) It's okay to send me emails with Discord updates, tips,
            and special offers. You can opt out at any time.
          </Label>
        </div>
        <div className="text-sm text-gray-300 mb-2 my-4">
          <p>
            {" "}
            By clicking "Create Account," you agree to Discord's Terms of
            Service and have read the Privacy Policy
          </p>
        </div>

        {/* Button */}
        <Button
          onClick={handleRegister}
          className="bg-indigo-500 hover:bg-indigo-600 cursor-pointer my-3 w-full "
        >
          Create Accont
        </Button>

        {/* Footer */}
        <p className="text-sm text-[#00A8FC] mt-4">
          <Link
            className="text-indigo-400 hover:text-indigo-500 "
            href="/login"
          >
            Already have an account?
          </Link>
        </p>
      </div>
    </LayoutAuth>
  );
}
