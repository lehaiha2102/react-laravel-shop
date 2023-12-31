import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ApexCharts from "apexcharts";
import { useEffect } from "react";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function Dashboard() {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Revenue",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chart: {
        height: 500,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return "$" + val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return "$" + val;
          },
        },
      },
      title: {
        text: "History sale of year",
        floating: true,
        offsetY: 480,
        align: "center",
        style: {
          color: "#444",
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <>
      <div className={`${admin["sales-metrics"]}`}>
  <div className={`${admin["sales-metric"]}`}>
    <div className={`${admin["metric-text"]}`}>
      <div className={`${admin["metric-title"]} ${admin["font-heading"]}`}>Total Revenue</div>
      <div className={`${admin["metric-note"]} ${admin["text-font"]} ${admin["shawdow-text"]}`}>(Last 30 Days)</div>
      <div className={`${admin["metric-price"]} ${admin["font-heading"]}`}>$0.00</div>
    </div>
    <div className={`${admin["metric-icon"]} ${admin["price-icon"]}`}>
      <MonetizationOnOutlinedIcon className={`${admin["dashboard-icon"]}`} />
    </div>
  </div>
  <div className={`${admin["sales-metric"]}`}>
    <div className={`${admin["metric-text"]}`}>
      <div className={`${admin["metric-title"]} ${admin["font-heading"]}`}>Total Order</div>
      <div className={`${admin["metric-note"]} ${admin["text-font"]} ${admin["shawdow-text"]}`}>(Last 30 Days)</div>
      <div className={`${admin["metric-price"]} ${admin["font-heading"]}`}>0</div>
    </div>
    <div className={`${admin["metric-icon"]} ${admin["cart-icon"]}`}>
      <ShoppingCartOutlinedIcon className={`${admin["dashboard-icon"]}`} />
    </div>
  </div>
</div>


<div className={`${admin["sales-metrics"]} ${admin['pt-30']}`}>
  <div className={`${admin["sales-metric"]}`}>
    <div className={`${admin["metric-text"]}`}>
      <div className={`${admin["metric-title"]} ${admin["font-heading"]}`}>Todays Revenue</div>
      <div className={`${admin["metric-note"]} ${admin["text-font"]} ${admin["shawdow-text"]}`}></div>
      <div className={`${admin["metric-price"]} ${admin["font-heading"]}`}>$0.00</div>
    </div>
    <div className={`${admin["metric-icon"]} ${admin["today-price-icon"]}`}>
      <AttachMoneyOutlinedIcon className={`${admin["dashboard-icon"]}`} />
    </div>
  </div>
  <div className={`${admin["sales-metric"]}`}>
    <div className={`${admin["metric-text"]}`}>
      <div className={`${admin["metric-title"]} ${admin["font-heading"]}`}>Total Customer</div>
      <div className={`${admin["metric-note"]} ${admin["text-font"]} ${admin["shawdow-text"]}`}></div>
      <div className={`${admin["metric-price"]} ${admin["font-heading"]}`}>0</div>
    </div>
    <div className={`${admin["metric-icon"]} ${admin["customers-icon"]}`}>
      <GroupOutlinedIcon className={`${admin["dashboard-icon"]}`} />
    </div>
  </div>
</div>


      <div className={admin["history-sale-chart"]}>
        <div id="chart"></div>
      </div>
      {/* <div className="sales-metrics pt-30">
        <div className="sales-metric">
          <div id="categories-chart">

          </div>
        </div>
        <div className="sales-metric">
          <div className="metric-text">
            <div className="metric-title font-heading">Total Customer</div>
            <div className="metric-note text-font shawdow-text"></div>
            <div className="metric-price font-heading">0</div>
          </div>
          <div className="metric-icon customers-icon">
            <GroupOutlinedIcon className="dashboard-icon" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
