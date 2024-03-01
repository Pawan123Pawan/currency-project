import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableDiv from "./TableDiv";
import Chart from "./Chart";
import useContextApi from "./ContextApi";
import Modal from "./Modal";
import { FunnelChart } from "recharts";

export default function DashboardTable() {
  const [data, setData] = useContextApi();
  const[modalData,setModalData] =useState({});
  const[check, setCheck] = useState(false);
  function handleModal(code){
    const modal = data.filter((data) => data.code === code)
    setModalData(modal)
    setCheck(true);
  }
  function cancelModal(){
    setCheck(false);
  }
  return (
    <div style={{ position: "relative" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#8884d8" }}>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Currency Name
              </TableCell>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Code
              </TableCell>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Symbol
              </TableCell>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Rate
              </TableCell>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF" }}
              >
                Rate_float
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((value) => (
              <TableDiv
                key={value.code}
                data={value}
                handleModal={handleModal}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="chart">
        <Chart />
      </div>
      {
        check &&<Modal data={modalData[0]} cancelModal={cancelModal}/>
      }
    </div>
  );
}
