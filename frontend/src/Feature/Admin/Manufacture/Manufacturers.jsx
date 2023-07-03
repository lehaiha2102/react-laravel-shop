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
      <div className="page-title">
        <span className="title font-heading">Manufacturers</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`search ${isClicked ? "clicked" : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />

        <Link
          to="/admin/manufacturers/add-manufacturer"
          className="add-btn font-btn add-btn-theme"
        >
          <AddIcon />
          Add
        </Link>
      </div>

      <div className="data-table">
        <table className="table">
          <thead>
            <tr>
              <th className="font-table-title">#</th>
              <th className="font-table-title">Name</th>
              <th className="font-table-title">Logo</th>
              <th className="font-table-title">Description</th>
              <th className="font-table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-font text-center">1</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font">
                <span className="description-info block-text"> Website: lehaiha.com</span>
                <span className="description-info block-text">Email: Lehaiha.com</span>
                <span className="description-info block-text">Phone: 01677818205 </span>
                <span className="description-info block-text">
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className="description-info block-text">Description: none </span>
              </td>
              <td className="text-font text-center action">
                <div className="edit-btn">
                  <EditOutlinedIcon />
                </div>
                <div className="delete-btn">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">2</td>
              <td className="text-font text-center">Jacob</td>
              <td className="text-font text-center">Thornton</td>
              <td className="text-font">
                <span className="description-info block-text"> Website: lehaiha.com</span>
                <span className="description-info block-text">Email: Lehaiha.com</span>
                <span className="description-info block-text">Phone: 01677818205 </span>
                <span className="description-info block-text">
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className="description-info block-text">Description: none </span>
              </td>
              <td className="text-font text-center action">
                <div className="edit-btn">
                  <EditOutlinedIcon />
                </div>
                <div className="delete-btn">
                  <DeleteOutlineOutlinedIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">3</td>
              <td className="text-font text-center">Larry the Bird</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font">
                <span className="description-info block-text"> Website: lehaiha.com</span>
                <span className="description-info block-text">Email: Lehaiha.com</span>
                <span className="description-info block-text">Phone: 01677818205 </span>
                <span className="description-info block-text">
                  Address: Hai Chau, Da Nang{" "}
                </span>
                <span className="description-info block-text">Description: none </span>
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
      <Stack spacing={2} className="pagination">
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default Manufacturer;
