import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";
import CheckIcon from "@mui/icons-material/Check";

function OrderDetail() {
  return (
    <div className={admin["data-table"]}>
      <div className={admin.title}>
        <div className={admin["title-content"]}>
          <span className={admin["font-table-title"]}>
            Order Status :{" "}
            <p className={`${admin["warning-layout"]} ${admin["text-font"]}`}>
              Order Processing
            </p>{" "}
          </span>
        </div>
        <div className={admin["title-content"]}>
          <span className={admin["font-table-title"]}>
            Payment Status :{" "}
            <p className={`${admin["blue-layout"]} ${admin["text-font"]}`}>
              Cash On Delivery
            </p>{" "}
          </span>
        </div>
      </div>

      <div className={`${admin["order-content"]} ${admin["mt-50"]}`}>
        <div className={admin.ribbon}>
          <div className="order-id font-heading">
            <span>
              Order ID - <p>334983046149</p>
            </span>
          </div>

          <div className={admin["order-status-change"]}>
            <select
              name="order-status-select"
              id=""
              className={`${admin["text-font"]} ${admin["shawdow-text"]} ${admin["order-status-select"]}`}
            >
              <option
                selected
                disabled
                className={`${admin["text-font"]} ${admin["shawdow-text"]}`}
              >
                Select...
              </option>
              <option
                value=""
                className={`${admin["text-font"]} ${admin["shawdow-text"]}`}
              >
                1
              </option>
              <option
                value=""
                className={`${admin["text-font"]} ${admin["shawdow-text"]}`}
              >
                2
              </option>
              <option
                value=""
                className={`${admin["text-font"]} ${admin["shawdow-text"]}`}
              >
                3
              </option>
            </select>

            <div
              className={`${admin["btn-blue"]} ${admin["single-line-text"]} ${admin["change-status-btn"]}`}
            >
              Change Status
            </div>
          </div>
        </div>

        <div className={admin["order-status"]}>
          <div className={admin["order-status-step"]}>
            <div className={admin["order-status-icon"]}>
              <div className={admin["icon"]}>
                <CheckIcon />
              </div>
              <span className={admin["font-table-title"]}>1</span>
            </div>
            <div className={admin["status-step-name"]}>Order Pending</div>
          </div>
          <div className={admin["order-status-step"]}>
            <div className={admin["order-status-icon"]}>
              <div className={admin["icon"]}>
                <CheckIcon />
              </div>
              <span className={admin["font-table-title"]}>2</span>
            </div>
            <div className={admin["status-step-name"]}>Order Processing</div>
          </div>
          <div className={admin["order-status-step"]}>
            <div className={admin["order-status-icon"]}>
              <div className={admin["icon"]}>
                <CheckIcon />
              </div>
              <span className={admin["font-table-title"]}>3</span>
            </div>
            <div className={admin["status-step-name"]}>
              Order At Local Facility
            </div>
          </div>
          <div className={admin["order-status-step"]}>
            <div className={admin["order-status-icon"]}>
              <div className={admin["icon"]}>
                <CheckIcon />
              </div>
              <span className={admin["font-table-title"]}>4</span>
            </div>
            <div className={admin["status-step-name"]}>
              Order Out For Delivery
            </div>
          </div>
          <div className={admin["order-status-step"]}>
            <div className={admin["order-status-icon"]}>
              <div className={admin["icon"]}>
                <CheckIcon />
              </div>
              <span className={admin["font-table-title"]}>5</span>
            </div>
            <div className={admin["status-step-name"]}>Order Completed</div>
          </div>
        </div>

        <div className={admin["order-detail-table"]}>
          <table className={admin.table}>
            <thead>
              <tr>
                <th className={`${admin["font-table-title"]}`}></th>
                <th className={`${admin["font-table-title"]}`}>Products</th>
                <th className={`${admin["font-table-title"]}`}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                  image product
                </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                  Product name x quantity
                </td>
                <td className={`${admin["text-font"]} ${admin["text-center"]}`}>
                  <span
                    className={`${admin["description-info"]} ${admin["block-text"]}`}
                  >
                    {" "}
                    $20
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            className={`${admin["total-detail"]} ${admin["mt-30"]} ${admin["pt-100"]}`}
          >
            <div className={admin["dashed-line"]}></div>
            <div className={admin["detail-info"]}>
              <div
                className={`${admin["detail-info-title"]} ${admin["shawdow-text"]} ${admin["text-font"]}`}
              >
                Subtotal
              </div>
              <div
                className={`${admin["detail-info-amount"]} ${admin["shawdow-text"]} ${admin["text-font"]} `}
              >
                $5.00
              </div>
            </div>
            <div className={admin["detail-info"]}>
              <div
                className={`${admin["detail-info-amount"]} ${admin["shawdow-text"]} ${admin["text-font"]} `}
              >
                Tax
              </div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className={admin["detail-info"]}>
              <div
                className={`${admin["detail-info-amount"]} ${admin["shawdow-text"]} ${admin["text-font"]} `}
              >
                Delivery fee
              </div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className={admin["detail-info"]}>
              <div
                className={`${admin["detail-info-amount"]} ${admin["shawdow-text"]} ${admin["text-font"]} `}
              >
                Discount
              </div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className={admin["dashed-line"]}></div>
            <div className={admin["detail-info"]}>
              <div
                className={`${admin["detail-info-title"]} ${admin["dark"]} ${admin["text-font"]}`}
              >
                Total
              </div>
              <div
                className={`${admin["detail-info-title"]} ${admin["dark"]} ${admin["text-font"]}`}
              >
                $5.00
              </div>
            </div>
          </div>

          <div className={admin["delivery-info"]}>
            <div
              className={`${admin["delivery-info-title"]} ${admin["title-content"]}`}
            >
              <div
                className={`${admin["billing-address"]} ${admin["font-table-title"]}`}
              >
                Billing Address
              </div>
              <div
                className={`${admin["shipping-address"]} ${admin["font-table-title"]}`}
              >
                Shipping Address
              </div>
            </div>

            <div className={admin["delivery-info-content"]}>
              <div className={admin["billing-address-content"]}>
                <span
                  className={`${admin["text-note"]} ${admin["shawdow-text"]}`}
                >
                  Voluptatum qui sunt, Ipsum qui minus sint, Quod et
                  consequatur, 51397, Aut fugiat iusto do
                </span>
                <span
                  className={`${admin["text-note"]} ${admin["shawdow-text"]}`}
                >
                  19365141641631
                </span>
              </div>
              <div className={admin["shipping-address-content"]}>
                <span
                  className={`${admin["text-note"]} ${admin["shawdow-text"]}`}
                >
                  mermoz, Dakar, Dakar, 38169, Sénégal
                </span>
                <span
                  className={`${admin["text-note"]} ${admin["shawdow-text"]}`}
                >
                  19365141641631
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
