"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Page() {
  return (
    <div style={{ width: 250 }} className="bg-primary-700">
      <DotLottieReact
        src="/lottie/Discord logo.json"
        loop
        autoplay
      />
    </div>
  );
}