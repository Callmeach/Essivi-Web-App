import "../styles/single.scss";
import Sidebar from "./../components/sidebar";
import Navbar from "./../components/navbar";
import Chart from "./../components/chart";
import TableData from "./../components/table";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DeliveriesTable from "../components/deliveriesTable";

const Single = () => {
  const { agentId } = useParams();
  const { clientId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (agentId) {
        const response = await fetch(
          `http://127.0.0.1:5000/agents/${agentId}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const { Agent } = data;

          setData(Agent);
        }
      } else if (clientId) {
        const response = await fetch(
          `http://127.0.0.1:5000/clients/${clientId}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          const { Client } = data;

          setData(Client);
        }
      }
    };
    fetchData();
  }, [agentId, clientId]);

  return (
    <div className="single">
      <Outlet />
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{`${data.nom} ${data.prenoms}`}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.telephone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{data.adresse}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Togo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          {agentId ? (
            <>
              <h1 className="title">Liste des Clients</h1>
              <TableData />
            </>
          ) : null}
        </div>
        <div className="bottom">
          {agentId ? (
            <>
              <h1 className="title">Liste des Dernières Livraisons</h1>
              <DeliveriesTable />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Single;
