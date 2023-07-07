import AddIcon from "@mui/icons-material/Add";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";



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
      <div className={admin["page-title"]}>
        <span className={`${admin.title} ${admin["font-heading"]}`}>Globals</span>
        {/* <SearchIcon className="search-btn"/> */}

        <Link to="/admin/globals/edit"className={`${admin["add-btn"]} ${admin["font-btn"]} ${admin["add-btn-theme"]}`}>
          <AddIcon />
          Edit
        </Link>
      </div>

      <div className={admin["data-table"]}>
      <table className={admin.table}>
          <thead>
            <tr>
              <th className={`${admin["font-table-title"]}`}>#</th>
              <th className={`${admin["font-table-title"]}`}>Avatar</th>
              <th className={`${admin["font-table-title"]}`}>Name</th>
              <th className={`${admin["font-table-title"]}`}>Permissions</th>
              <th className={`${admin["font-table-title"]}`}>Status</th>
              <th className={`${admin["font-table-title"]}`}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>1</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className="description-info block-text warning-layout"> Inactive</span>
              </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>2</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Thornton</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className="description-info block-text blue-layout"> Active</span>
              </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>3</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className="description-info block-text gray-layout"> Block</span>
              </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
              </td>
            </tr>
            <tr>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>4</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Mark</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>Otto</td>
               <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
              <span className="description-info block-text blue-layout"> Active</span>
              </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span className={`${admin.descriptionInfo} ${admin.blockText}`}> Website: lehaiha.com</span>
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

export default Global;
