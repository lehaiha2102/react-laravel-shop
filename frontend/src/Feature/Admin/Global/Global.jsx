import AddIcon from "@mui/icons-material/Add";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Global() {
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
        <span className="title font-heading">Globals</span>
        {/* <SearchIcon className="search-btn"/> */}

        <Link to="/admin/globals/edit" className="add-btn font-btn add-btn-theme">
          <AddIcon />
          Edit
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

export default Global;
