import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Orders() {
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
        <span className="title font-heading">Orders</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`search ${isClicked ? "clicked" : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />
      </div>

      <div className="data-table">
        <table className="table">
          <thead>
            <tr>
              <th className="font-table-title">#</th>
              <th className="font-table-title">Delivery Fee </th>
              <th className="font-table-title">Total</th>
              <th className="font-table-title">Order Date</th>
              <th className="font-table-title">Status</th>
              <th className="font-table-title">Shipping Address </th>
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
                <span className="description-info block-text">
                  {" "}
                  <span className="warning-layout text-font">Order Processing</span>
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className=" text-center action">
                <Link to="/admin/orders/detail"  className="detail-btn">
                  {" "}
                  <div className="text-font"></div>
                  <VisibilityIcon />
                </Link>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">2</td>
              <td className="text-font text-center">Thornton</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  <span className="blue-layout text-font">Order Completed</span>
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className=" text-center action">
                <div className="text-font">
                  <Link to="/admin/orders/detail"  className="detail-btn">
                    {" "}
                    <VisibilityIcon />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">3</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  <span className="gray-layout text-font">Order Cancelled</span>
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className=" text-center action">
                <div className="text-font">
                  <Link to="/admin/orders/detail"  className="detail-btn">
                    {" "}
                    <VisibilityIcon />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">4</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  <span className="warning-layout text-font">Order Processing</span>
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className=" text-center action">
                <div className="text-font">
                  <Link to="/admin/orders/detail"  className="detail-btn">
                    {" "}
                    <VisibilityIcon />
                  </Link>
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

export default Orders;
