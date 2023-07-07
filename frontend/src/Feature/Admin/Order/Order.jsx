import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


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
      <div className={admin["page-title"]}>
        <span className={`${admin.title} ${admin["font-heading"]}`}>Orders</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`${admin.search} ${isClicked ? admin.clicked : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />
      </div>

      <div className={admin["data-table"]}>
        <table className={admin.table}>
          <thead>
            <tr>
              <th className={`${admin["font-table-title"]}`}>#</th>
              <th className={`${admin["font-table-title"]}`}>Delivery Fee </th>
              <th className={`${admin["font-table-title"]}`}>Total</th>
              <th className={`${admin["font-table-title"]}`}>Order Date</th>
              <th className={`${admin["font-table-title"]}`}>Status</th>
              <th className={`${admin["font-table-title"]}`}>Shipping Address </th>
              <th className={`${admin["font-table-title"]}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>1</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  <span className={`${admin["warning-layout"]} ${admin['text-font']}`}>Order Processing</span>

                </span>
              </td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className={`${admin["textcenter"]} ${admin['action']}`}>
                <Link to="/admin/orders/detail"  className={admin["detail-btn"]}>
                  {" "}
                  <div className={admin["text-font"]}></div>
                  <VisibilityIcon />
                </Link>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>2</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Thornton</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  <span className={`${admin["blue-layout"]} ${admin['text-font']}`}>Order Completed</span>
                </span>
              </td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className={`${admin["textcenter"]} ${admin['action']}`}>
                <div className={admin["text-font"]}>
                  <Link to="/admin/orders/detail"  className={admin["detail-btn"]}>
                    {" "}
                    <VisibilityIcon />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>3</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  <span className={`${admin["gray-layout"]} ${admin['text-font']}`}>Order Cancelled</span>
                </span>
              </td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className={`${admin["textcenter"]} ${admin['action']}`}>
                <div className={admin["text-font"]}>
                  <Link to="/admin/orders/detail"  className={admin["detail-btn"]}>
                    {" "}
                    <VisibilityIcon />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>4</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  <span className={`${admin["warning-layout"]} ${admin['text-font']}`}>Order Processing</span>
                </span>
              </td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}>
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className={`${admin["textcenter"]} ${admin['action']}`}>
                <div className={admin["text-font"]}>
                  <Link to="/admin/orders/detail"  className={admin["detail-btn"]}>
                    {" "}
                    <VisibilityIcon />
                  </Link>
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

export default Orders;
