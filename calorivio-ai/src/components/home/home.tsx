import { useState } from "react";
import "./home.css";

import Chat from "../../screens/chat";
import Profile from "../../screens/profile";

const Home_Comp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showText, setShowText] = useState(true);
  const [activePage, setActivePage] = useState("chat");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    if (!collapsed) {
      setShowText(false);
      setCollapsed(true);
    } else {
      setCollapsed(false);
      setTimeout(() => setShowText(true), 200);
    }
  };

  const openPage = (page: string) => {
    setActivePage(page);
    setMobileOpen(false);
  };

  const menuItems = [
    { label: "AI Nutrition Chat", icon: "fa-comment-dots", page: "chat" },
    { label: "Meal Plans", icon: "fa-utensils", page: "mealPlans" },
    { label: "BMI Calculator", icon: "fa-calculator", page: "bmi" },
    { label: "Progress", icon: "fa-chart-line", page: "progress" },
  ];

  return (
    <div className="app_layout">
      <header className="mobile_header">
        <button className="mobile_menu_btn" onClick={() => setMobileOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <h2 className="heading-6 font-w-700">CALORIVIO</h2>
      </header>

      {mobileOpen && (
        <div className="mobile_overlay" onClick={() => setMobileOpen(false)} />
      )}

      <aside
        className={`sidebar ${collapsed ? "collapsed" : ""} ${
          mobileOpen ? "mobile_open" : ""
        }`}
      >
        <div className="sidebar_top">
          <button className="icon_btn desktop_toggle" onClick={toggleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </button>

          {showText && (
            <h2 className="logo heading-6 font-w-700">CALORIVIO</h2>
          )}

          <button
            className="mobile_close_btn"
            onClick={() => setMobileOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <button className="new_chat_btn" onClick={() => openPage("chat")}>
          <i className="fa-solid fa-plus"></i>
          {showText && <span className="text-sm font-w-500">New Chat</span>}
        </button>

        <nav className="nav_links">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`nav_item ${
                activePage === item.page ? "active" : ""
              }`}
              onClick={() => openPage(item.page)}
            >
              <i className={`fa-solid ${item.icon}`}></i>

              {showText && (
                <span className="text-sm font-w-500">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar_bottom">
          <button
            className={`nav_item ${
              activePage === "profile" ? "active" : ""
            }`}
            onClick={() => openPage("profile")}
          >
            <i className="fa-solid fa-circle-user"></i>

            {showText && <span className="text-sm font-w-500">Profile</span>}
          </button>
        </div>
      </aside>

      <main className="main_dashboard">
        {activePage === "chat" && <Chat />}

        {activePage === "profile" && <Profile />}

        {activePage === "mealPlans" && (
          <div className="page_content">
            <h1 className="heading-3 font-w-700">Meal Plans</h1>
            <p className="text-md font-w-400">
              Your saved meal plans will appear here.
            </p>
          </div>
        )}

        {activePage === "bmi" && (
          <div className="page_content">
            <h1 className="heading-3 font-w-700">BMI Calculator</h1>
            <p className="text-md font-w-400">
              Calculate your BMI and calories here.
            </p>
          </div>
        )}

        {activePage === "progress" && (
          <div className="page_content">
            <h1 className="heading-3 font-w-700">Progress</h1>
            <p className="text-md font-w-400">
              Your weight progress will appear here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home_Comp;