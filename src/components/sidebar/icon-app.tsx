import Image from "next/image";

const IconApp = () => {
  return (
    <div className="w-10 h-10 rounded-xl flex overflow-hidden bg-primary-600 items-center justify-center text-white font-bold">
      <Image width={50} height={50} alt="icon discord" src="/cibi.jpg" className="object-cover"/>
    </div>
  );
};

export default IconApp;
