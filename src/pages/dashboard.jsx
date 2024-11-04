import MenuSidebar from "../components/MenuSidebar";
import '../App.css';
import NavBar from "../components/NavBar";
import TransactionHistory from "../components/TransactionHistory";
import RevenueChart from "../components/RevenueChart"

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Hello World</h1>
            <div className="dashboard-content">
                <p>This is the Dashboard page.</p>
            </div>
        </div>
    );
};

export default Dashboard;

