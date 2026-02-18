
import {
  FiUserPlus,
  FiMoreHorizontal,
  FiSearch,
} from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { TiPin } from "react-icons/ti";

const TopBar = () => {
  return (
    <div className="h-14 flex items-center justify-between px-6 border-b border-[#2b2d31]">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-semibold text-[15px]">Dayat</span>
        </div>

        <div className="flex items-center gap-6 text-gray-400 text-xl">
          <FaPhoneVolume className="hover:text-white cursor-pointer" />
          <BsFillCameraVideoFill className="hover:text-white cursor-pointer" />
          <TiPin className="hover:text-white text-3xl cursor-pointer" />
          <FiUserPlus className="hover:text-white cursor-pointer text-2xl" />
          <FiMoreHorizontal className="hover:text-white cursor-pointer" />

          {/* SEARCH */}
          <div className="ml-6 relative">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
            <input
              placeholder="Search dayat3118"
              className="bg-[#2b2d31] pl-8 pr-4 py-1.5 rounded-md text-sm outline-none placeholder-gray-400"
            />
          </div>
        </div>
      </div>
  )
}

export default TopBar