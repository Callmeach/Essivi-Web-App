import "../styles/table.scss";

import {
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper }
  from "@mui/material";

import { useState, useEffect } from "react";

const AllDeliveriesTable = ({updateRevenu}) => {

  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:5000/livraison/list`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const {Livraisons} = data
        const {Total_Revenu} = data
        
        setRows(Livraisons)
        updateRevenu(Total_Revenu)
        
      }
    };
    fetchData();
  }, []);

  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Agent</TableCell>
            <TableCell className="tableCell">Client</TableCell>
            <TableCell className="tableCell">Quantite</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Adresse</TableCell>
            <TableCell className="tableCell">Tel Client </TableCell>
            {/* <TableCell className="tableCell">Payment Method</TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                {row.agent.nom} {row.agent.prenoms}
              </TableCell>
              <TableCell className="tableCell">{row.client.nom} {row.client.prenoms}</TableCell>
              <TableCell className="tableCell">{row.quantite}</TableCell>
              <TableCell className="tableCell">{(new Date(row.date)).toLocaleDateString()}</TableCell>
              <TableCell className="tableCell">{row.adresse}</TableCell>
              <TableCell className="tableCell">{row.client.telephone}</TableCell>
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllDeliveriesTable;