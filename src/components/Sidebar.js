import React from "react";
import { icons } from "react-icons";
import { FaPlay, FaPlug, FaPlusCircle } from "react-icons/fa";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
    return (
        <div className="m-0 fixed top-0 bg-gray-700 h-screen w-20 flex flex-col">
            <SidebarIcon
                icon={<FaPlay size="20" color="white" />}
                text="Tooltip"
            />
            <SidebarIcon
                icon={<FaPlug size="20" color="white" />}
                text="Tooltip"
            />
            <SidebarIcon
                icon={<FaPlusCircle size="20" color="white" />}
                text="Tooltip"
            />
        </div>
    );
};

export default Sidebar;
