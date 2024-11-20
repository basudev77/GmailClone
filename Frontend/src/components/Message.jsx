import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCropSquare} from "react-icons/md";
import { RiStarLine } from "react-icons/ri";

function Message() {
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/axvsgh245');
    }
  return (
    <div onClick={openMail} className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="h-5 w-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="h-5 w-5" />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-gray-600 truncate inline-block max-w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, ea?</p>
        </div>
        <div className="flex-none text-gray-400 text-sm">
            12:00 
        </div>
      </div>
    </div>
  );
}

export default Message;
