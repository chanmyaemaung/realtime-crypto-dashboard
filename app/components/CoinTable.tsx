"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import FooterCredit from "./FooterCredit";

interface Crypto {
  name: string;
  changePercent24Hr: number;
  priceUsd: number;
}

function createData(name: string, changePercent24Hr: number, priceUsd: number) {
  return { name, changePercent24Hr, priceUsd };
}

export default function CoinTable() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/crypto/assets");
    eventSource.onmessage = ({ data }) => {
      const updatedCryptos = JSON.parse(data)?.data.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      setCryptos(updatedCryptos);
    };

    return () => eventSource.close();
  }, []);

  const rows = cryptos.map((crypto: Crypto) => {
    return createData(crypto.name, crypto.changePercent24Hr, crypto.priceUsd);
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          stickyHeader
          sx={{ minWidth: 500, height: 200 }}
          aria-label="Coin table"
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Change 24H</TableCell>
              <TableCell align="right">Price USD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.changePercent24Hr}</TableCell>
                <TableCell align="right">{row.priceUsd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <footer>
        <FooterCredit />
      </footer>
    </>
  );
}
