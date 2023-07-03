import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

function Attribute() {

  return (
    <>
      <div className="page-title text-center">
        <span className="title font-heading">Attributes</span>
      </div>

      <div className="data-table">
        <table className="table">
          <thead>
            <tr>
              <th className="font-table-title">#</th>
              <th className="font-table-title">Name</th>
              <th className="font-table-title">Value</th>
              <th className="font-table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-font text-center">1</td>
              <td className="text-font text-center">Mark</td>
              <td className="text-font text-center">Otto</td>
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
              <td className="text-font text-center" >
                Larry the Bird
              </td>
              <td className="text-font text-center">@twitter</td>
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

export default Attribute;
