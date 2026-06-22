import { useState } from "react";
import "./home.css";
import Chat from "../../screens/chat";


const Home_Comp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showText, setShowText] = useState(true);
  const [activePage, setActivePage] = useState("chat");

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
      label: "AI Nutrition Chat",
      icon: "fa-comment-dots",
      page: "chat",
    },
    {
      label: "Meal Plans",
      icon: "fa-utensils",
      page: "mealPlans",
    },
    {
      label: "BMI Calculator",
      icon: "fa-calculator",
      page: "bmi",
    },
    {
      label: "Progress",
      icon: "fa-chart-line",
      page: "progress",
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

        <button className="new_chat_btn" onClick={() => setActivePage("chat")}>
          <i className="fa-solid fa-plus"></i>
          {showText && <span>New Chat</span>}
        </button>

        <nav className="nav_links">
          {menuItems.map((item) => (
            <button
              className={`nav_item ${activePage === item.page ? "active" : ""}`}
              key={item.label}
              onClick={() => setActivePage(item.page)}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              {showText && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main_dashboard">
        {activePage === "chat" && <Chat />}

        {activePage === "mealPlans" && (
          <div className="page_content">
            <h1>Meal Plans</h1>
            <p>Your saved meal plans will appear here.</p>
          </div>
        )}

        {activePage === "bmi" && (
          <div className="page_content">
            <h1>BMI Calculator</h1>
            <p>Calculate your BMI and calories here.</p>
          </div>
        )}

        {activePage === "progress" && (
          <div className="page_content">
            <h1>Progress</h1>
            <p>Your weight progress will appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home_Comp;