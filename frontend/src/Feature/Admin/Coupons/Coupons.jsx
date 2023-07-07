import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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

function Coupons() {
  const [isClicked, setIsClicked] = useState(false);

  const changeBorderColor = () => {
    setIsClicked(true);
  };

  const resetBorderColor = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div className={admin["page-title"]}>
        <span className={`${admin.title} ${admin["font-heading"]}`}>Coupons</span>
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

        <Link to="/admin/coupons/add-coupon"className={`${admin["add-btn"]} ${admin["font-btn"]} ${admin["add-btn-theme"]}`}>
          <AddIcon />
          Add
        </Link>
      </div>

      <div className={admin["data-table"]}>
      <table className={admin.table}>
          <thead>
            <tr>
              <th className={`${admin["font-table-title"]}`}>#</th>
              <th className={`${admin["font-table-title"]}`}>Image</th>
              <th className={`${admin["font-table-title"]}`}>Quantity Code</th>
              <th className={`${admin["font-table-title"]}`}>Type</th>
              <th className={`${admin["font-table-title"]}`}>Active Day</th>
              <th className={`${admin["font-table-title"]}`}>Will Expire</th>
              <th className={`${admin["font-table-title"]}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>1</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
                <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
              <td className={`${admin["text-center"]} ${admin.action}`}>
                  <div className={admin["edit-btn"]}>
                  <EditOutlinedIcon />
                </div>
                <div className={admin["delete-btn"]}>
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>2</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Thornton</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
                <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
              <td className={`${admin["text-center"]} ${admin.action}`}>
                  <div className={admin["edit-btn"]}>
                  <EditOutlinedIcon />
                </div>
                <div className={admin["delete-btn"]}>
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>3</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
                <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
              <td className=" text-center action">
                <div className="edit-btn text-font">
                  <EditOutlinedIcon />
                </div>
                <div className="delete-btn text-font">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>4</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
                <td className={admin["text-font"]}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Email: Lehaiha.com</span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Phone: 01677818205 </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>Description: none </span>
              </td>
              <td className=" text-center action">
                <div className="edit-btn text-font">
                  <EditOutlinedIcon />
                </div>
                <div className="delete-btn text-font">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Stack spacing={2}  className={admin.pagination}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default Coupons;
