import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: "home", label: "Home" },
    { id: "app", icon: "smartphone", label: "App" },
    { id: "comments", icon: "chat_bubble", label: "Comments" },
    { id: "stats", icon: "monitoring", label: "Stats" },
    { id: "download", icon: "download", label: "Download" },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center z-50 items-center">
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-full px-5 py-3 flex items-center space-x-3 md:space-x-5 h-[50px] transition-all duration-300 ease-in-out transform md:scale-100 scale-[0.9]">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center space-x-1 group transition-all duration-300 ease-in-out p-2 rounded-full
                ${
                  active === item.id
                    ? "text-accentLight bg-accentDark"
                    : "text-textLight hover:text-accentDark"
                }`}
            >
              <span 
                className="material-symbols-rounded text-4xl transition-transform duration-300 ease-in-out group-hover:scale-120 flex items-center justify-center"
              >
                {item.icon}
              </span>
              <span 
                className={`hidden md:flex font-medium text-md overflow-hidden transition-all duration-300 ease-in-out items-center justify-center
                  ${active === item.id 
                    ? "max-w-[100px] opacity-100" 
                    : "max-w-0 opacity-0"
                  }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;