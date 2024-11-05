import MenuSidebar from "../components/MenuSidebar";
import '../App.css';
import Header from "../components/Header";
import OverallRevenue from "../components/RevenueChart"; 
import UserActivity from "../components/UserActivity"; 
import TransactionHistory from "../components/TransactionHistory";
import RevenueChart from "../components/RevenueChart";
import ProductList from "../components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <main className="dashboard-content">

        <div className="charts-and-activity">
          <section className="revenue-chart-section">
            <h2 className="section-title">Revenue Chart</h2>
            <RevenueChart />
          </section>

          <section className="user-activity-section">
            <h2 className="section-title">User Activity</h2>
            <UserActivity />
          </section>
        </div>

        <div className="products-and-transactions">
          <section className="product-list-section">
            <h2 className="section-title">Product List</h2>
            <ProductList />
          </section>

          <section className="transaction-history-section">
            <h2 className="section-title">Transaction History</h2>
            <TransactionHistory />
          </section>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;