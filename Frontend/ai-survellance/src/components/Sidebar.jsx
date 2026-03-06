import React from 'react'
import { FiBell, FiFileText, FiHome, FiSettings, FiVideo } from 'react-icons/fi'

const SideBar = ({isOpen,  toggleSidebar}) => {
  return (
     <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800 z-50
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold tracking-wide text-white">
            AI Surveillance
          </h1>

          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 p-4 space-y-2">

          <SidebarItem icon={<FiHome />} label="Dashboard" active />
          <SidebarItem icon={<FiVideo />} label="Live Monitoring" />
          <SidebarItem icon={<FiBell />} label="Alerts" />
          <SidebarItem icon={<FiFileText />} label="Reports" />
          <SidebarItem icon={<FiSettings />} label="Settings" />

        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-slate-800">
          <button className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
      ${
        active
          ? "bg-slate-800 text-green-400"
          : "text-gray-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default SideBar
