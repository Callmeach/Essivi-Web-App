import '../styles/list.scss';
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Datatable from '../components/datatable';
import { useState, useEffect } from 'react';

const ListAgents = ({title}) => {
  const [data, setData] = useState([])

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
          const {agents} = data
          
          setData(agents.map(user => ({ id: user.id, nom: user.nom, prenoms: user.prenoms, email: user.email, telephone: user.telephone })));
          // const rows = data.map((item) => {
          //   return {
          //     id: item.id,
          //     nom: item.nom,
          //     prenoms: item.prenoms,
          //     email: item.email,
          //     telephone: item.telephone,
          //   };
          // });
          //setData(data)
          
        }
        
      }
      
      catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="list">
      <Outlet />
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} label={title} />
      </div>
    </div>
  );
};

export default ListAgents;
