import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
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
        <span className="title font-heading">Customer</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`search ${isClicked ? "clicked" : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />

        <Link to="/admin/customers/add-customer" className="add-btn font-btn add-btn-theme">
          <AddIcon />
          Add
        </Link>
      </div>

      <div className="data-table">
      <table className="table">
          <thead>
            <tr>
              <th className="font-table-title">#</th>
              <th className="font-table-title">Avatar</th>
              <th className="font-table-title">Name</th>
              <th className="font-table-title">Permissions</th>
              <th className="font-table-title">Status</th>
              <th className="font-table-title">Description</th>
              <th className="font-table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-font text-center">1</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text warning-layout"> Inactive</span>
              </td>
               <td className="text-font text-center">
                <span className="description-info block-text"> Website: lehaiha.com</span>
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
              <td className="text-font text-center">Thornton</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text blue-layout"> Active</span>
              </td>
               <td className="text-font text-center">
                <span className="description-info block-text"> Website: lehaiha.com</span>
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
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text gray-layout"> Block</span>
              </td>
               <td className="text-font text-center">
                <span className="description-info block-text"> Website: lehaiha.com</span>
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
              <td className="text-font text-center">4</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
              <span className="description-info block-text blue-layout"> Active</span>
              </td>
               <td className="text-font text-center">
                <span className="description-info block-text"> Website: lehaiha.com</span>
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

export default Customers;
