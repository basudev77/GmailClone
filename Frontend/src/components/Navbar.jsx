import Avatar from "react-avatar";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { PiDotsNineBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/appSlice";


function Navbar() {
  const [input, setInput] = useState("");
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchText(input));
  },[input]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="http://freelogopng.com/images/all_img/1657906169gmail-logo-png.png"
            alt="gmail-logo"
          />
          <h1 className="text-2xl pl-1 text-gray-600 font-low">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search mail"
            className="bg-transparent outline-none outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <AiOutlineQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <LuSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://tse3.mm.bing.net/th?id=OIP.yHjEfYkKVKI4HefomX2A6wHaHa&pid=Api&P=0&h=180"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
