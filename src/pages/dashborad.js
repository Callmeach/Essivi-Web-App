import Chart from "../components/chart";
import Featured from "../components/featured";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Widget from "../components/widget";
import "../styles/dashboard.scss";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AllDeliveriesTable from "../components/allDeliveries";

const Dashboard = ({onLogout}) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [agents, setAgents] = useState('')
  const [clients, setClients] = useState('')
  const [today, setToday] = useState('')
  const [quantity, setQuantity] = useState('')
  const [revenu, setRevenu] = useState('')
  const [revenuTotal, setRevenuTotal] = useState('')

  function updateRevenu(TotalRevenu) {
    setRevenuTotal(TotalRevenu)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]))
      setUser(user)
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/agents/', {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          const {total} = data
          setAgents(total)      
        }
        
      }
      
      catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/clients/', {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          const {total} = data
          setClients(total)      
        }
        
      }
      
      catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/livraison/today', {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          const {total} = data
          const {quantite} = data 
          const {revenu} = data
          setToday(total)      
          setQuantity(quantite)
          setRevenu(revenu)
        }
        
      }
      
      catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    onLogout();
    navigate('/')
  }
  return (
    <div className="dashboard">
      <Outlet />
      <Sidebar onLogout={handleLogout} />
      <div className="dashboardContainer">
        <Navbar user={user} />
        <div className="widgets">
          <Widget amount={agents} type="user" />
          <Widget amount={clients} type="order" />
          <Widget amount={today} type="earning" />
          <Widget amount={quantity} type="balance" />
        </div>
        <div className="charts">
          <Featured revenu={revenu} revenuTotal={revenuTotal} />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Dernieres Livraisons</div>
          <AllDeliveriesTable updateRevenu={updateRevenu} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
