"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HiEye, HiEyeOff } from "react-icons/hi";

type InputPasswordProps = React.ComponentProps<typeof Input>;

export default function InputPassword({
  className = "",
  ...props
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={`pr-10 ${className}`}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
      >
        {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
      </button>
    </div>
  );
}