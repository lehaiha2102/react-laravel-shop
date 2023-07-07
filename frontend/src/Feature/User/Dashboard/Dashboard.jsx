import { useEffect, useState } from "react";
import user from "../../../components/layout/user_layout/components/assets/style.module.scss";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
function Dashboard() {
  const [data, setData] = useState([]); // Dữ liệu đã được load
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [scrollPosition, setScrollPosition] = useState(0); // Vị trí cuộn

  const loadData = () => {
    // Gọi API hoặc xử lý logic để lấy dữ liệu mới
    // Sau khi nhận được dữ liệu, cập nhật state của 'data' với dữ liệu mới
    // Ví dụ: setData(newData);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      // Đến điểm cuộn nhất định (trừ 20px cho dự phòng)
      if (!isLoading) {
        setIsLoading(true);
        loadData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Xử lý sau khi dữ liệu đã được load
    setIsLoading(false);
  }, [data]);

  return (
    <>
      <div className={user.swiper}>
        <div className={user.swiperItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.swiperItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.swiperItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.swiperItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
      </div>

      <div className={user.productCollection}>
        <div className={user.collectionNavbar}>
          <div className={user.collectionTitle}>Best Sale</div>
          <div className={user.collectionShowMore}>Show more</div>
        </div>
        <div className={user.collectionContent}>
          <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
          <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
          <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
          <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
          <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
        </div>
      </div>

      <div className={user.manufacturersList}>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
      </div>
      <div className={user.manufacturersList}>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div className={user.manufacturerItem}>
          <img
            src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
      </div>

      <div className={user.productCollection}>
        <div className={user.collectionNavbar}>
          <div className={user.collectionTitle}>Mega sale</div>
          <div className={user.collectionShowMore}>Show more</div>
        </div>
        <div className={user.collectionContent}>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
        </div>
        <div className={user.collectionContent}>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
        </div>
      </div>

      <div className={user.categoriesDisplayList}>
        <div className={user.categoriesNavbar}>
          <div className={user.categoriesTitle}>Categories</div>
          <div className={user.categoriesShowMore}>Show more</div>
        </div>
        <div className={user.categoriesDisplayContent}>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
        </div>
        <div className={user.categoriesDisplayContent}>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <div className={user.categoriesDisplayItem}>
            <img
              src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={user.productCollection}>
        <div className={user.collectionNavbar}>
          <div className={user.collectionTitle}>Standout product</div>
          <div className={user.collectionShowMore}>Show more</div>
        </div>
        <div className={user.collectionContent}>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
        </div>
        <div className={user.collectionContent}>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
           <div className={user.productItemCollection}>
            <div className={user.productImageDisplay}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div className={user.manufacturerName}>Asus</div>
            <div className={user.productNameDisplay}>
              Laptop ACER Aspire 3 A315-58-54M5 (NX.ADDSV.00M) (i5-1135G7/RAM
              8GB/512GB SSD/ Windows 11)Laptop ACER Aspire 3 A315-58-54M5
              (NX.ADDSV.00M) (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11)
            </div>
            <div className={user.salePrice}>9.000.000$</div>
            <div className={user.discountInfo}>
              <div className={user.price}>10.900.000$</div>
              <div className={user.discountPercent}>30%</div>
            </div>
            <div className={user.addCartBtn}>Add to cart</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
