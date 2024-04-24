import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Dashboardlayout.css";
import Login from "../LoginForm/Login";

const Dashboard = () => {
  return (
    <div id="Dashboardwrap">
      <div>
        <Sidebar />
      </div>

      <div>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
