import { useState } from "react";
import "./home.css";

const Home_Comp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showText, setShowText] = useState(true);

  const toggleSidebar = () => {
    if (!collapsed) {
      setShowText(false);
      setCollapsed(true);
    } else {
      setCollapsed(false);

      setTimeout(() => {
        setShowText(true);
      }, 200);
    }
  };

  const menuItems = [
    {
      label: "Dashboard",
      icon: "fa-table-columns",
    },
    {
      label: "AI Nutrition Chat",
      icon: "fa-comment-dots",
    },
    {
      label: "Meal Plans",
      icon: "fa-utensils",
    },
    {
      label: "BMI Calculator",
      icon: "fa-calculator",
    },
    {
      label: "Progress",
      icon: "fa-chart-line",
    },
    {
      label: "Profile",
      icon: "fa-user",
    },
  ];

  return (
    <div className="app_layout">
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar_top">
          <button className="icon_btn" onClick={toggleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </button>

          {showText && <h2 className="logo">CALORIVIO</h2>}
        </div>

        <button className="new_chat_btn">
          <i className="fa-solid fa-plus"></i>
          {showText && <span>New Chat</span>}
        </button>

        <nav className="nav_links">
          {menuItems.map((item) => (
            <button className="nav_item" key={item.label}>
              <i className={`fa-solid ${item.icon}`}></i>
              {showText && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar_bottom">
          <button className="nav_item">
            <i className="fa-solid fa-gear"></i>
            {showText && <span>Settings</span>}
          </button>

          <button className="nav_item">
            <i className="fa-solid fa-right-from-bracket"></i>
            {showText && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className="main_dashboard">
        <div className="chat_container">
          <h1>What can I help you with?</h1>

          <div className="chat_box">
            <input
              type="text"
              placeholder="Ask Calorivio about meals, calories, or diets..."
            />

            <button>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home_Comp;