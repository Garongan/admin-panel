import { MdSpaceDashboard, MdEmojiPeople, MdArticle } from "react-icons/md";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { GiIdea } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneSetting, AiOutlineSearch } from "react-icons/ai";
import { PiMedalFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import "./Dashboard.css";
import { useState } from "react";
import TrendsChart from "./TrendsChart";

export default function Dashboard() {
  const [activeAction, setActiveAction] = useState("Overdue");
  const [activeSideBar, setActiveSideBar] = useState("Overview");

  const action = [
    { title: "Unresolved", sum: 60 },
    { title: "Overdue", sum: 16 },
    { title: "Open", sum: 43 },
    { title: "On hold", sum: 64 },
  ];

  const sidebarMenu = [
    { icons: FaChartPie, title: "Overview" },
    { icons: FaTicketAlt, title: "Tickets" },
    { icons: GiIdea, title: "Ideas" },
    { icons: HiUserGroup, title: "Contacts" },
    { icons: MdEmojiPeople, title: "Agents" },
    { icons: MdArticle, title: "Articles" },
    { icons: AiTwotoneSetting, title: "Settings" },
    { icons: PiMedalFill, title: "Subcription" },
  ];

  const handleSideBar = (title) => {
    setActiveSideBar(title);
  };

  const handleAction = (title) => {
    setActiveAction(title);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <MdSpaceDashboard className="icon-logo" /> <span>Dashboard Kit</span>
        </div>
        <ul>
          {sidebarMenu.map((index) => (
            <li
              key={index.id}
              className={`${index.title === activeSideBar ? "active" : ""}`}
              onClick={() => handleSideBar(index.title)}
            >
              <index.icons className="icon-sidebar" /> <span>{index.title}</span>
            </li>
          ))}
        </ul>
      </aside>
      <div className="dashboard">
        <div className="dashboard-title">
          Overview
          <div className="profile-wrapper">
            <div className="search">
              <AiOutlineSearch />
            </div>
            <div className="notif">
              <IoIosNotifications />
            </div>
            <span>|</span> Alvindo Tri Jatmiko
            <div className="profile-pic">
              <img src="profile.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="dashboard-actions-wrapper">
          {action.map((action) => (
            <button
              key={action.id}
              className={`dashboard-action-button ${
                activeAction === action.title ? "active" : ""
              }`}
              onClick={() => handleAction(action.title)}
            >
              {action.title}
              <span>{action.sum}</span>
            </button>
          ))}
        </div>

        <div className="dashboard-today-trends-wrapper">
          <TrendsChart />
        </div>

        <div className="dashboard-footer"></div>
      </div>
    </>
  );
}
