import { MdSpaceDashboard, MdEmojiPeople, MdArticle } from "react-icons/md";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneSetting, AiOutlineSearch } from "react-icons/ai";
import { PiMedalFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import "./Dashboard.css";
import { useState } from "react";
import TrendsChart from "./TrendsChart";

export default function Dashboard() {
  const [active, setActive] = useState(null);

  const action = [
    { id: 1, title: "Unresolved", sum: 60 },
    { id: 2, title: "Overdue", sum: 16 },
    { id: 3, title: "Open", sum: 43 },
    { id: 4, title: "On hold", sum: 64 },
  ];

  const handleButtonClick = (action) => {
    setActive(action);
    console.log(active);
  };

  return (
    <>
      <aside className="sidebar">
        <ul>
          <li>
            <MdSpaceDashboard /> <span>Dashboard Kit</span>
          </li>
          <li>
            <FaChartPie /> <span>Overview</span>
          </li>
          <li>
            <FaTicketAlt /> <span>Tickets</span>
          </li>
          <li>
            <FcIdea /> <span>Ideas</span>
          </li>
          <li>
            <HiUserGroup /> <span>Contacts</span>
          </li>
          <li>
            <MdEmojiPeople /> <span>Agents</span>
          </li>
          <li>
            <MdArticle /> <span>Articles</span>
          </li>
          <hr />
          <li>
            <AiTwotoneSetting /> <span>Settings</span>
          </li>
          <li>
            <PiMedalFill /> <span>Subscription</span>
          </li>
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
            <span>|</span> Jones Ferdinand <div className="profile-pic"></div>
          </div>
        </div>
        <div className="dashboard-actions-wrapper">
          {action.map((action) => (
            <button
              key={action.id}
              className={`dashboard-action-button ${
                active === action.title ? "active" : ""
              }`}
              onClick={() => handleButtonClick(action.title)}
            >
              {action.title}
              <span>{action.sum}</span>
            </button>
          ))}
        </div>

        <div className="dashboard-today-trends-wrapper">
          <div className="dashboard-chart">
            <TrendsChart />
          </div>
        </div>

        <div className="dashboard-footer"></div>
      </div>
    </>
  );
}
