import NitroNavbar from "./component/navbar";
import { FaGift } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import Image from "next/image";

export default function NitroPage() {
  return (
    <div className="h-full relative bg-primary-900  overflow-y-auto">
      <NitroNavbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-purple-400 via-purple-600 to-primary-900 text-white">
        <div className=" z-10 flex flex-col items-center text-center px-6 h-[500px] justify-center ">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight z-50">
            UNLOCK A WORLD OF
            <br />
            PERKS WITH NITRO
          </h1>

          <div className="flex gap-4 mt-12">
            <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 cursor-pointer text-black font-semibold hover:bg-gray-200 transition">
              <SiBlender className="text-xl" />
              Subscribe
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 py-2 cursor-pointer font-medium hover:bg-white/20 transition">
              <FaGift className="text-lg" />
              Gift Nitro
            </button>
          </div>

          <p className="mt-8 text-sm text-white/60">
            Plans start at only IDR 29,000.00/month. Cancel anytime
          </p>
        </div>

        {/* Blur accents */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2  w-[1500px] h-24 z-10 bg-pink-400 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-48 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-60" />
      </section>

      {/* WHAT'S NEW */}
      <section className="bg-primary-900 pt-20 pb-28">
        <h2 className="text-center text-white text-4xl font-extrabold tracking-wide mb-10">
          WHAT&apos;S NEW
        </h2>

        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-b from-[#2b2d31] to-[#1e1f22] py-12 px-10 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
            {/* CARD */}
            <div className="w-full md:w-[420px] text-white ">
              <span className="inline-block rounded-full bg-purple-600 px-2  text-xs font-semibold tracking-wide">
                NEW
              </span>

              <h3 className="mt-3 text-3xl font-bold leading-tight">
                Same name. New look.
              </h3>

              <p className="mt-3 text-base text-whhite leading-relaxed">
                Mix and match fonts, effects, and colors to create a display
                name that stands out in style.
              </p>

              <button className="mt-6 rounded-md bg-[#313338] px-6 py-3 cursor-pointer text-sm font-medium hover:bg-[#3a3c41] transition">
                Take me there
              </button>
            </div>

            {/* MOCK NAMES */}
            <div className="flex text-xl font-bold">
            <Image src="/nitro/nitro3.PNG" width={500} height={400} alt="mock names" />
            </div>
          </div>
          {/* grid 2 */}
          <div className=" text-white font-semibold grid grid-cols-2 grid-rows-1 rounded-2xl gap-8 mt-8">
            {/* pertama */}
            <div className="col-span-1 row-span-1 bg-primary-700 p-6 rounded-lg ">
              <div className="flex justify-center items-center py-10">
                <Image
                  src="/nitro/coba.png"
                  height={350}
                  width={350}
                  alt="coba"
                  className=""
                />
              </div>
              <div className="px-12 pb-6">
                <h2 className="text-2xl font-bold mt-4">
                  Your CLient. Any color
                </h2>
                <p className="text-base font-normal mt-3">
                  Discord doesn't have to be so black and white. create Your own
                  custom theme to make discord uniquely yours.
                </p>

                <button className="mt-6 rounded-md bg-[#313338] px-6 py-3 cursor-pointer text-sm font-medium hover:bg-[#3a3c41] transition">
                  Take me there
                </button>
              </div>
            </div>
            {/* kedua */}
            <div className="row-span-2 bg-primary-700 p-6 rounded-2xl h-[530px]">
              <div className="flex justify-center items-center h-64">
                <Image
                  src="/nitro/coba2.png"
                  height={350}
                  width={350}
                  alt="coba"
                  className=""
                />
              </div>
              <div className="px-12 pb-6">
                <h2 className="text-2xl font-bold mt-4">
                  Share Nitro with friends
                </h2>
                <p className="text-base font-normal mt-3">
                  Get 3 friend passes to share Nitro with friends. Learn more..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
