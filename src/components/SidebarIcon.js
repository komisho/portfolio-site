import React from "react";

const SidebarIcon = ({ icon, text }) => {
    return (
        <div className="group flex bg-gray-600 justify-center h-12 w-12 my-2 mx-auto items-center hover:bg-green-400 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear">
            {icon}
            <span className="group group-hover:scale-100 left-24 absolute justify-center text-white font-bold rounded-md items-center flex w-fit h-fit px-2 py-1 bg-gray-800 scale-0 transition-all duration-75 ease-linear origin-left">
                {text}
            </span>
        </div>
    );
};

export default SidebarIcon;
