import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  
  function createData(name, calories, fat, carbs, protein, detail, action) {
    return { name, calories, fat, carbs, protein, detail, action };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 10, 20),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 10, 20),
    createData("Eclair", 262, 16.0, 24, 6.0, 10, 20),
  ];

function Group() {
    const [isClicked, setIsClicked] = useState(false);

  const changeBorderColor = () => {
    setIsClicked(true);
  };

  const resetBorderColor = () => {
    setIsClicked(false);
  };
    return (  <>
        <div className={admin["page-title"]}>
          <span className={`${admin.title} ${admin["font-heading"]}`}>Groups</span>
          {/* <SearchIcon className="search-btn"/> */}
  
          <input
            type="text"
            className={`${admin.search} ${isClicked ? admin.clicked : ""}`}
            onClick={changeBorderColor}
            onBlur={resetBorderColor}
            placeholder="Type your query and press enter"
          />
  
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency-native"
                select
                defaultValue="EUR"
                SelectProps={{
                  native: true,
                }}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          </Box>
  
          <Link to="/admin/groups/add"className={`${admin["add-btn"]} ${admin["font-btn"]} ${admin["add-btn-theme"]}`}>
            <AddIcon />
            Add
          </Link>
        </div>
  
        <div className={admin["data-table"]}>
          <TableContainer component={Paper} style={{ marginBottom: "10px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Icon</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Slug</TableCell>
                  <TableCell align="center">Detail</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.detail}</TableCell>
                    <TableCell align="center">{row.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Stack spacing={2}  className={admin.pagination}>
          <Pagination count={10} color="primary" />
        </Stack>
      </> );
}

export default Group;