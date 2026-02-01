import Image from "next/image";

export default function ShopPage() {
  return (
    <main>
      <div className="min-h-screen text-white max-w-6xl  mx-auto">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-8 py-4 bg-[#0b0c10] border-b border-white/5">
          <div className="flex items-center gap-6 text-sm text-white/80 ">
            <span className="font-semibold text-white">Featured</span>
            <span className="cursor-pointer">Browse</span>
            <span className="cursor-pointer">Orbs Exclusives</span>
          </div>

          <div className="flex items-center gap-4">
            <input
              placeholder="Search the Shop"
              className="bg-[#1b1c20] px-4 py-2 rounded-lg text-sm outline-none"
            />
            <div className="w-8 h-8 rounded-full bg-white/10" />
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
              0
            </div>
          </div>
        </nav>

        {/* HERO / COLLECTION */}
        <section className="relative overflow-hidden">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src="/gothic-bg.jpg"
              alt="bg"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative z-10 px-12 py-16">
            <div className="flex items-center justify-between">
              <h1 className="text-6xl font-extrabold tracking-tight gothic">
                Gothica
              </h1>

              <button className="rounded-xl bg-white px-6 py-3 text-black font-semibold hover:bg-gray-200">
                Shop the Collection
              </button>
            </div>

            {/* PRODUCT CARDS */}
            <div className="mt-16 grid grid-cols-4 gap-6">
              {["Widow’s Hat", "She-Bat", "He-Bat", "Amethyst Choker"].map(
                (item) => (
                  // card
                  <div
                    key={item}
                    className="rounded-md cursor-pointer bg-primary-800 p-4 shadow-xl hover:translate-y-[-4px] transition grid justify-items-center"
                  >
                    <div className="relative rounded-full overflow-hidden h-32 w-32">
                      <div className="h-48 w-48 flex justify-center items-center">
                        <Image
                          src="/profil.jpg"
                          alt={item}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="mt-4  w-full">
                      <p className="font-semibold text-base">{item}</p>
                      <p className="text-base text-white mt-1 font-bold">
                        IDR 39,500
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ORBS EXCLUSIVE */}
        <section className="px-12 py-20">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden bg-[#15161b]">
              <Image
                src="/gothic-bg.jpg"
                alt="tarot"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40" />
              <button className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded-lg">
                Take me there
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#15161b]">
              <Image
                src="/gothic-bg.jpg"
                alt="valentine"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/40" />
              <button className="absolute bottom-6 left-6 bg-white text-black px-4 py-2 rounded-lg">
                Take me there
              </button>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Discord Orbs Exclusives</h2>

            <button className="rounded-xl bg-white/10 px-5 py-2 hover:bg-white/20">
              Shop All Discord Orbs Exclusives
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
