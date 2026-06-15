"use client";

import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile menu button */}
      <button
         onClick={() => {
                console.log("Button Clicked");
            }}
        className="fixed left-4 top-4 z-50 rounded-lg bg-[#212121] px-3 py-2 text-white md:hidden"
      >
        ☰
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
     <aside
        className={`
            fixed top-0 z-[999] h-screen w-72 bg-[#171717] text-[#ececec]
            transition-all duration-300
            ${open ? "left-0" : "-left-72"}
            md:left-0
        `}
        >
        <div className="flex h-full flex-col p-3">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Calorivio AI</h1>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-[#2f2f2f] md:hidden"
            >
              ✕
            </button>
          </div>

          <button className="mb-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-[#2f2f2f]">
            + New Chat
          </button>

          <nav className="space-y-1 text-sm">
            <SidebarItem label="Dashboard" />
            <SidebarItem label="AI Nutrition Chat" />
            <SidebarItem label="Meal Plans" />
            <SidebarItem label="BMI Calculator" />
            <SidebarItem label="Progress Tracker" />
            <SidebarItem label="Saved History" />
            <SidebarItem label="Profile" />
          </nav>

          <div className="mt-auto border-t border-[#2f2f2f] pt-3">
            <SidebarItem label="Settings" />
            <SidebarItem label="Logout" />
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({ label }: { label: string }) => {
  return (
    <div className="cursor-pointer rounded-lg px-3 py-2 text-[#ececec] transition hover:bg-[#2f2f2f]">
      {label}
    </div>
  );
};

export default Sidebar;