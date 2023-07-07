import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


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
      <div className={admin["page-title"]}>
        <span className={`${admin.title} ${admin["font-heading"]}`}>Customer</span>
        {/* <SearchIcon className="search-btn"/> */}

        <input
          type="text"
          className={`${admin.search} ${isClicked ? admin.clicked : ""}`}
          onClick={changeBorderColor}
          onBlur={resetBorderColor}
          placeholder="Type your query and press enter"
        />

        <Link to="/admin/customers/add-customer"className={`${admin["add-btn"]} ${admin["font-btn"]} ${admin["add-btn-theme"]}`}>
          <AddIcon />
          Add
        </Link>
      </div>

      <div className={admin["data-table"]}>
      <table className={`${admin.table}`}>
  <thead>
    <tr>
      <th className={`${admin["font-table-title"]}`}>#</th>
      <th className={`${admin["font-table-title"]}`}>Avatar</th>
      <th className={`${admin["font-table-title"]}`}>Name</th>
      <th className={`${admin["font-table-title"]}`}>Permissions</th>
      <th className={`${admin["font-table-title"]}`}>Status</th>
      <th className={`${admin["font-table-title"]}`}>Description</th>
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
        <span className={`${admin.descriptionInfo} ${admin.blockText} ${admin['warning-layout']}`}> Inactive</span>
      </td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
      </td>
      <td className={`${admin["text-center"]} ${admin.action}`}>
        <div className={`${admin["edit-btn"]}`}>
          <EditOutlinedIcon />
        </div>
        <div className={`${admin["delete-btn"]}`}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </td>
    </tr>
    <tr>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>2</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Thornton</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText} ${admin['blue-layout']}`}> Active</span>
      </td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
      </td>
      <td className={`${admin["text-center"]} ${admin.action}`}>
        <div className={`${admin["edit-btn"]}`}>
          <EditOutlinedIcon />
        </div>
        <div className={`${admin["delete-btn"]}`}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </td>
    </tr>
    <tr>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>3</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText} ${admin['gray-layout']}`}> Block</span>
      </td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
      </td>
      <td className={`${admin["text-center"]} ${admin.action}`}>
        <div className={`${admin["edit-btn"]} ${admin["text-font"]}`}>
          <EditOutlinedIcon />
        </div>
        <div className={`${admin["delete-btn"]} ${admin["text-font"]}`}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </td>
    </tr>
    <tr>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>4</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText} ${admin['blue-layout']}`}> Active</span>
      </td>
      <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
        <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
      </td>
      <td className={`${admin["text-center"]} ${admin.action}`}>
        <div className={`${admin["edit-btn"]} ${admin["text-font"]}`}>
          <EditOutlinedIcon />
        </div>
        <div className={`${admin["delete-btn"]} ${admin["text-font"]}`}>
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

export default Customers;
