import React from "react";
import "./sidebar.css";
//import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <button>
        <AiFillAmazonCircle /> <span>Amazon</span>
      </button> */}
      <button>
        <AiFillApple />
        <span>Apple</span>
      </button>
      <button>
        <AiFillHtml5 />
        <span>Html 5</span>
      </button>
      <button>
        <AiFillDashboard /> <span>Dash</span>
      </button>
      <button>
        <AiFillDatabase /> <span>Database</span>
      </button>
    </div>
  );
}
export default Sidebar;
