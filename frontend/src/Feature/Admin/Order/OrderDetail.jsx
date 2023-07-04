import CheckIcon from "@mui/icons-material/Check";
function OrderDetail() {
  return (
    <div className="data-table">
      <div className="title">
        <div className="title-content">
          <span className="font-table-title">
            Order Status :{" "}
            <p className="warning-layout text-font">Order Processing</p>{" "}
          </span>
        </div>
        <div className="title-content">
          <span className="font-table-title">
            Payment Status :{" "}
            <p className="blue-layout text-font">Cash On Delivery</p>{" "}
          </span>
        </div>
      </div>

      <div className="order-content mt-50">
        <div className="ribbon">
          <div className="order-id font-heading">
            <span>
              Order ID - <p>334983046149</p>
            </span>
          </div>

          <div className="order-status-change">
            <select
              name="order-status-select"
              id=""
              className="text-font shawdow-text order-status-select"
            >
              <option selected disabled className="text-font shawdow-text">
             Select...
              </option>
              <option value="" className="text-font shawdow-text">
                1
              </option>
              <option value="" className="text-font shawdow-text">
                2
              </option>
              <option value="" className="text-font shawdow-text">
                3
              </option>
            </select>

            <div className="btn-blue single-line-text change-status-btn">
              Change Status
            </div>
          </div>
        </div>

        <div className="order-status">
          <div className="order-status-step">
            <div className="order-status-icon">
              <div className="icon">
                <CheckIcon />
              </div>
              <span className="font-table-title">1</span>
            </div>
            <div className="status-step-name">Order Pending</div>
          </div>
          <div className="order-status-step">
            <div className="order-status-icon">
              <div className="icon">
                <CheckIcon />
              </div>
              <span className="font-table-title">2</span>
            </div>
            <div className="status-step-name">Order Processing</div>
          </div>
          <div className="order-status-step">
            <div className="order-status-icon">
              <div className="icon">
                <CheckIcon />
              </div>
              <span className="font-table-title">3</span>
            </div>
            <div className="status-step-name">Order At Local Facility</div>
          </div>
          <div className="order-status-step">
            <div className="order-status-icon">
              <div className="icon">
                <CheckIcon />
              </div>
              <span className="font-table-title">4</span>
            </div>
            <div className="status-step-name">Order Out For Delivery</div>
          </div>
          <div className="order-status-step">
            <div className="order-status-icon">
              <div className="icon">
                <CheckIcon />
              </div>
              <span className="font-table-title">5</span>
            </div>
            <div className="status-step-name">Order Completed</div>
          </div>
        </div>

        <div className="order-detail-table">
          <table className="table">
            <thead>
              <tr>
                <th className="font-table-title"></th>
                <th className="font-table-title">Products</th>
                <th className="font-table-title">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-font text-center">image product</td>
                <td className="text-font text-center">
                  Product name x quantity
                </td>
                <td className="text-font text-center">
                  <span className="description-info block-text"> $20</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="total-detail mt-30 pb-100">
            <div className="dashed-line"></div>
            <div className="detail-info">
              <div className="detail-info-title text-font shawdow-text">Subtotal</div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className="detail-info">
              <div className="detail-info-title text-font shawdow-text">Tax</div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className="detail-info">
              <div className="detail-info-title text-font shawdow-text">Delivery fee</div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className="detail-info">
              <div className="detail-info-title text-font shawdow-text">Discount</div>
              <div className="detail-info-amount shawdow-text">$5.00</div>
            </div>
            <div className="dashed-line"></div>
            <div className="detail-info">
              <div className="detail-info-title text-font dark">Total</div>
              <div className="detail-info-amount text-font dark">$5.00</div>
            </div>
          </div>

          <div className="delivery-info">
            <div className="delivery-info-title title-content">
              <div className="billing-address font-table-title">
                Billing Address
              </div>
              <div className="shipping-address font-table-title">
             Shipping Address
              </div>
            </div>
            <div className="delivery-info-content">
              <div className="billing-address-content ">
                <span className="text-note shawdow-text">
                  Voluptatum qui sunt, Ipsum qui minus sint, Quod et
                  consequatur, 51397, Aut fugiat iusto do
                </span>
                <span className="text-note shawdow-text">19365141641631</span>
              </div>
              <div className="shipping-address-content ">
              <span className="text-note shawdow-text">
              mermoz, Dakar, Dakar, 38169, Sénégal
                </span>
                <span className="text-note shawdow-text">19365141641631</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
