import MenuSidebar from "../components/MenuSidebar";
import '../App.css';
import Header from "../components/Header";
import TransactionHistory from "../components/TransactionHistory";
import RevenueChart from "../components/RevenueChart";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <MenuSidebar/>
      <main className="content">

        <section className="statistics">
          
        </section>

        <section className="charts">
         
        </section>

        <section className="products">
         
        </section>

        <section className="transactions">
          
        </section>
      </main>
    </div>
    

  );
}

export default Dashboard;

