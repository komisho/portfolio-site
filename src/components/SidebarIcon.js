import React from "react";

const SidebarIcon = ({ icon }) => {
    return (
        <div className="flex bg-gray-600 justify-center h-12 w-12 my-2 mx-auto items-center hover:bg-green-400 rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear">
            {icon}
        </div>
    );
};

export default SidebarIcon;
