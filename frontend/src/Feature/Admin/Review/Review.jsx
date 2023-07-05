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

function Reviews() {
  return (
    <>
      <div className="page-title">
        <span className="title font-heading">Reviews</span>
      </div>

      <div className="data-table">
        <table className="table">
          <thead>
            <tr>
              <th className="font-table-title">#</th>
              <th className="font-table-title">Image</th>
              <th className="font-table-title">Customer Review</th>
              <th className="font-table-title">Ratings</th>
              <th className="font-table-title">Products</th>
              <th className="font-table-title">Date</th>
              <th className="font-table-title">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-font text-center">1</td>
              <td className="text-font text-center">Otto1</td>
              <td className="text-font customer-review">
                <span className="customer-review-name">
                  <p>by</p>
                  <p className="font-table-title">Customer name</p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className="review-comment">
                  Book is good but had to wait for a late delivery.
                </span>
                <div className="review-action">
                  <div className="action shawdow-text">
                    <ThumbUpOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                  <div className="action shawdow-text">
                    <ThumbDownOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                </div>
              </td>
              <td className="text-font rating">
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text warning-layout">
                  {" "}
                  Inactive
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className="text-font text-center action">
                <div className="detail-btn">
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">2</td>
              <td className="text-font text-center">Thornton</td>
              <td className="text-font customer-review">
                <span className="customer-review-name">
                  <p>by</p>
                  <p className="font-table-title">Customer name</p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className="review-comment">
                  Book is good but had to wait for a late delivery.
                </span>
                <div className="review-action">
                  <div className="action shawdow-text">
                    <ThumbUpOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                  <div className="action shawdow-text">
                    <ThumbDownOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                </div>
              </td>
              <td className="text-font rating">
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text blue-layout">
                  {" "}
                  Active
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className="text-font text-center action">
                <div className="detail-btn">
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">3</td>
              <td className="text-font text-center">Otto2</td>
              <td className="text-font customer-review">
                <span className="customer-review-name">
                  <p>by</p>
                  <p className="font-table-title">Customer name</p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className="review-comment">
                Too much fiction all over.. Over done every part. Too much fiction all over.. Over done every part.
                </span>
                <div className="review-action">
                  <div className="action shawdow-text">
                    <ThumbUpOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                  <div className="action shawdow-text">
                    <ThumbDownOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                </div>
              </td>
              <td className="text-font rating">
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text gray-layout">
                  {" "}
                  Block
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className="text-font text-center action">
                <div className="detail-btn">
                  <ChatIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-font text-center">4</td>
              <td className="text-font text-center">Otto3</td>
              <td className="text-font customer-review">
                <span className="customer-review-name">
                  <p>by</p>
                  <p className="font-table-title">Customer name</p>{" "}
                  <CheckCircleOutlineIcon />
                </span>
                <span className="review-comment text-font">
                  Book is good but had to wait for a late delivery.
                </span>
                <div className="review-action">
                  <div className="action shawdow-text">
                    <ThumbUpOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                  <div className="action shawdow-text">
                    <ThumbDownOffAltIcon className="like-icon" />
                    <span className="like-number">0</span>
                  </div>
                </div>
              </td>
              <td className="text-font rating">
                <span>
                  <p>5</p> <StarBorderIcon />{" "}
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text blue-layout">
                  {" "}
                  Active
                </span>
              </td>
              <td className="text-font text-center">
                <span className="description-info block-text">
                  {" "}
                  Website: lehaiha.com
                </span>
              </td>
              <td className="text-font text-center action">
                <div className="detail-btn">
                  <ChatIcon />
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

export default Reviews;
