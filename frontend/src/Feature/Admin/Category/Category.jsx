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

function Category() {
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
        <span className={`${admin.title} ${admin["font-heading"]}`}>Categories</span>

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
      className={admin.select}
    >
      {/* Các tùy chọn */}
    </TextField>
  </div>
</Box>

<Link
  to="/admin/categories/add-category"
  className={`${admin["add-btn"]} ${admin["font-btn"]} ${admin["add-btn-theme"]}`}
>
  <AddIcon />
  Add
</Link>

      </div>

      <div className={admin["data-table"]}>
      <table className={admin.table}>
          <thead>
            <tr>
              <th className={`${admin["font-table-title"]}`}>#</th>
              <th className={`${admin["font-table-title"]}`}>Name</th>
              <th className={`${admin["font-table-title"]}`}>Value</th>
              <th className={`${admin["font-table-title"]}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                1
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Mark
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Otto
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]} ${admin.action}`}
              >
                <div className={admin["edit-btn"]}>
                  <EditOutlinedIcon />
                </div>
                <div className={admin["delete-btn"]}>
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                2
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Jacob
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Thornton
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]} ${admin.action}`}
              >
                <div className={admin["edit-btn"]}>
                  <EditOutlinedIcon />
                </div>
                <div className={admin["delete-btn"]}>
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                3
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Larry the Bird
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                @twitter
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
          </tbody>
        </table>
      </div>
      <Stack spacing={2}  className={admin.pagination}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default Category;
