import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { motion } from "framer-motion";
import { AntDesignOutlined } from "@ant-design/icons";

import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlinePhishing } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";


import "../style/Home.css";

export default function Home() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/help">Help</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );

  const [sections, setSections] = useState([
    { id: 1, title: "פרטיות אישית", completed: false, icon: <MdOutlinePrivacyTip />},
    { id: 2, title: "זיהוי הונאות ופישינג", completed: true, icon: <MdOutlinePhishing /> },
    { id: 3, title: "תכנים פוגעניים ובריונות ברשת", completed: false, icon: <AiFillExclamationCircle /> },
    { id: 4, title: "ניהול סיסמאות", completed: false, icon: <RiLockPasswordFill />},
    { id: 5, title: "תקשורת ברשתות החברתיות", completed: true, icon: <AiFillExclamationCircle /> },
    { id: 6, title: "זיהוי תוכן מזויף ומטעה", completed: false, icon: <AiFillExclamationCircle /> },
  ]);

   // Handle drag end and reordering logic
   const handleDragEnd = (draggedId, newIndex) => {
    const draggedIndex = sections.findIndex((section) => section.id === draggedId);
    const reorderedSections = [...sections];
    const [draggedItem] = reorderedSections.splice(draggedIndex, 1);
    reorderedSections.splice(newIndex, 0, draggedItem);
    setSections(reorderedSections);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="home-container"
    >
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <img
            src="https://via.placeholder.com/40"
            alt="App Logo"
            className="logo"
          />
          <span className="app-name">My App</span>
        </div>
        <div className="header-right">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()} href="/">
              Menu
            </a>
          </Dropdown>
        </div>
      </header>

      {/* Main Section */}
      <main className="main">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`feature-box ${section.completed ? "completed" : "not-completed"}`}
          >
            <p className={`feature-title ${section.completed ? "completed" : "not-completed"}`}>
              {section.title}
            </p>
            <div className="feature-icon">{section.icon}</div>
          </div>
        ))}
      </main>
    </motion.div>
  );
}