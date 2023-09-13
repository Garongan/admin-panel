import { MdSpaceDashboard, MdEmojiPeople, MdArticle } from "react-icons/md";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneSetting, AiOutlineSearch } from "react-icons/ai";
import { PiMedalFill } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";
import "./Dashboard.css";

export default function Dashboard() {
  const action = ["Unresolved", "Overdue", "Open", "On hold"];
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
        <div className="title">
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
        <div className="box-actions">
          {action.map((title) => {
            <div className="box">{title}</div>;
          })}
        </div>
      </div>
    </>
  );
}
