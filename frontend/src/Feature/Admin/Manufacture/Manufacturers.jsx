import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function Manufacturer() {
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
        <span className={`${admin.title} ${admin["font-heading"]}`}>Manufacturers</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`${admin.search} ${isClicked ? admin.clicked : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />

        <Link
          to="/admin/manufacturers/add-manufacturer"
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
              <th className={`${admin["font-table-title"]}`}>Logo</th>
              <th className={`${admin["font-table-title"]}`}>Description</th>
              <th className={`${admin["font-table-title"]}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>1</td>
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
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Jacob</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Thornton</td>
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
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Larry the Bird</td>
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

export default Manufacturer;
