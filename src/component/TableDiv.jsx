import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function TableDiv({ data , handleModal}) {
  return (
    <>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          ":hover": { cursor: "pointer", bgcolor:"#82CA9D"},
        }}
        onClick={() => handleModal(data.code)}
      >
        <TableCell component="th" scope="row">
          {data.code}
        </TableCell>
        <TableCell align="">{data.code}</TableCell>
        <TableCell align="">{data.symbol}</TableCell>
        <TableCell align="">{data.rate}</TableCell>
        <TableCell align="">{data.description}</TableCell>
        <TableCell align="">{data.rate_float}</TableCell>
      </TableRow>
    </>
  );
}
