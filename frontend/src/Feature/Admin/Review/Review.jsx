import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

function Reviews() {
  return (
    <>
      <div className={admin["page-title"]}>
        <span className={`${admin.title} ${admin["font-heading"]}`}>
          Reviews
        </span>
      </div>

      <div className={admin["data-table"]}>
        <table className={`${admin.table}`}>
          <thead>
            <tr>
              <th className={`${admin["font-table-title"]}`}>#</th>
              <th className={`${admin["font-table-title"]}`}>Image</th>
              <th className={`${admin["font-table-title"]}`}>
                Customer Review
              </th>
              <th className={`${admin["font-table-title"]}`}>Ratings</th>
              <th className={`${admin["font-table-title"]}`}>Products</th>
              <th className={`${admin["font-table-title"]}`}>Date</th>
              <th className={`${admin["font-table-title"]}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                1
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Otto1
              </td>
              <td
                className={`${admin["text-font"]} ${admin["customer-review"]}`}
              >
                <span className={admin["customer-review-name"]}>
                  <p>by</p>
                  <p className={admin["font-table-title"]}>
                    Customer name
                  </p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className={admin["review-comment"]}>
                  Book is good but had to wait for a late delivery.
                </span>
                <div className={admin["review-action"]}>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbUpOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbDownOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                </div>
              </td>
              <td className={`${admin["text-font"]} ${admin.rating}`}>
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]} ${admin["warning-layout"]}`}
                >
                  {" "}
                  Inactive
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]}`}
                >
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]}  ${admin["action"]}`}
              >
                <div className={admin["detail-btn"]}>
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                2
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Thornton
              </td>
              <td
                className={`${admin["text-font"]} ${admin["customer-review"]}`}
              >
                <span className={admin["customer-review-name"]}>
                  <p>by</p>
                  <p className={admin["font-table-title"]}>
                    Customer name
                  </p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className={admin["review-comment"]}>
                  Book is good but had to wait for a late delivery.
                </span>
                <div className={admin["review-action"]}>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbUpOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbDownOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                </div>
              </td>
              <td className={`${admin["text-font"]} ${admin.rating}`}>
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]} ${admin["blue-layout"]}`}
                >
                  {" "}
                  Active
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]}`}
                >
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]}  ${admin["action"]}`}
              >
                <div className={admin["detail-btn"]}>
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                3
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Otto2
              </td>
              <td
                className={`${admin["text-font"]} ${admin["customer-review"]}`}
              >
                <span className={admin["customer-review-name"]}>
                  <p>by</p>
                  <p className={admin["font-table-title"]}>
                    Customer name
                  </p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className={admin["review-comment"]}>
                  Too much fiction all over.. Over done every part. Too much
                  fiction all over.. Over done every part.
                </span>
                <div className={admin["review-action"]}>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbUpOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbDownOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                </div>
              </td>
              <td className={`${admin["text-font"]} ${admin.rating}`}>
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]} ${admin["gray-layout"]}`}
                >
                  {" "}
                  Block
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]}`}
                >
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]}  ${admin["action"]}`}
              >
                <div className={admin["detail-btn"]}>
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                4
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                Otto3
              </td>
              <td
                className={`${admin["text-font"]} ${admin["customer-review"]}`}
              >
                <span className={admin["customer-review-name"]}>
                  <p>by</p>
                  <p className={admin["font-table-title"]}>
                    Customer name
                  </p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className={admin["review-comment"]}>
                  Book is good but had to wait for a late delivery.
                </span>
                <div className={admin["review-action"]}>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbUpOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                  <div
                    className={`${admin["action"]} ${admin["shawdow-text"]}`}
                  >
                    <ThumbDownOffAltIcon className={admin["like-icon"]} />
                    <span className={admin["like-number"]}>0</span>
                  </div>
                </div>
              </td>
              <td className={`${admin["text-font"]} ${admin.rating}`}>
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]} ${admin["blue-layout"]}`}
                >
                  {" "}
                  Active
                </span>
              </td>
              <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                <span
                  className={`${admin["description-info"]} ${admin["block-text"]}`}
                >
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td
                className={`${admin["text-font"]} ${admin["text-center"]}  ${admin["action"]}`}
              >
                <div className={admin["detail-btn"]}>
                  <ChatIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Stack spacing={2} className={admin.pagination}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default Reviews;
