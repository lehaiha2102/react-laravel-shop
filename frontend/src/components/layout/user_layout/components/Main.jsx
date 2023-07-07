import { ToastContainer } from "react-toastify";
import Header from "./Header";
import user from "./assets/style.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
function Main({ children }) {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const slider = document.querySelector("#slider-id");
      const sliderTop = slider.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsSliderVisible(
        sliderTop < windowHeight && sliderTop > -slider.clientHeight
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterBtnClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCartBtnClick = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <ToastContainer />
      <Header showSearchInput={!isSliderVisible} />
      <div className={user.cartFeature }>
        <div onClick={handleCartBtnClick}>
        <div className={user.cartText}>
          <ShoppingCartIcon className={user.cartIcon} />
          <span className={user.cart}>0</span>
        </div>
        <div className={user.cartInfo}>0$</div>
        </div>
       
        {showCart && (
        <div className={user.cartDetailDisplay}>
          <div className={user.cartHeader}>
            <div className={user.cartTotalQuantity}>
              <ShoppingBagIcon />{" "}
              <span className={user.cartQuantity}>0 Items</span>
            </div>
            <div className={user.cartDetailDisplayClose}>
              <button className={user.closeSidebar} onClick={handleCartBtnClick}>
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className={user.cartContentDisplay}>
            <div className={user.cartItem}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
                className={user.productImage}
              />

              <span className={user.productName}>Iphone</span>
              <span className={user.productPrice}>100$ x 3</span>
            </div>
            <div className={user.cartItem}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
                className={user.productImage}
              />

              <span className={user.productName}>IphoneGet your healthy foods & snacks delivered at your doorsteps all
              day everyday</span>
              <span className={user.productPrice}>100$ x 3</span>
            </div>
            <div className={user.cartItem}>
              <img
                src="https://th.bing.com/th/id/OIP.pCKnDlxP6WH4a6lEEYLkRgHaHa?pid=ImgDet&rs=1"
                alt=""
                className={user.productImage}
              />

              <span className={user.productName}>Iphone</span>
              <span className={user.productPrice}>100$ x 3</span>
            </div>
          </div>

          <div className={user.cartTotalPriceDisplay}>
           <span className={user.checkoutText}> Checkout <p className={user.cartTotalPrice}>$500</p></span>
          </div>
        </div>
        )}
      </div>
      <div className={user.slider} id="slider-id">
        <img
          src="https://th.bing.com/th/id/R.ad18ca35dc0b21f6c09b590e22b0c974?rik=b8fu7Vrv5wBm6Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ENvkpiNuBCA%2fUcl0JJccPtI%2fAAAAAAAACG0%2f710Vp5gjASY%2fs1600%2f9-dammekhonggioihan.blogspot.com.jpg&ehk=dZ4OGqz9WG8xVPbnnSEmpPrAQ335RALCS3HIxZTlD1E%3d&risl=&pid=ImgRaw&r=0"
          alt="slider"
          className={user.sliderImage}
        />
        <div className={user.sliderContent}>
          <div className={user.sliderText}>
            <div className={user.sliderTitle}>
              Groceries Delivered in 90 Minute
            </div>
            <div className={user.sliderDescription}>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </div>
          </div>
          <div className={user.content}>
            <input
              type="text"
              placeholder="Enter everything you need to find here"
              className={user.search}
            />
            <button className={user.searchBtn}>Search</button>
          </div>
        </div>
      </div>

      <div className={user.container}>
        <div className={user.productFilter}>
          <button className={user.filterBtn} onClick={handleFilterBtnClick}>
            <FilterAltIcon /> Filter
          </button>
          {showFilter && (
            <div className={user.filterContent}>
              <div className={user.filterTitle}>
                <img
                  src="https://th.bing.com/th/id/OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG?pid=ImgDet&rs=1"
                  alt="logo"
                  className={user.logo}
                />
                <button
                  className={user.closeSidebar}
                  onClick={handleFilterBtnClick}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className={user.filterOptions}>
                <div className={user.filterOption}>
                  <div className={user.filterOptionName}>Categories Name</div>
                  <div className={user.options}>
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Apple
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Samsung
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Xiaomi
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Apple
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Samsung
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Xiaomi
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Apple
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Samsung
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Xiaomi
                  </div>
                  <div className={user.filterOptionName}>
                    Manufacturers Name
                  </div>
                  <div className={user.options}>
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Apple
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Samsung
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Xiaomi
                  </div>
                  <div className={user.filterOptionName}>Price</div>
                  <div className={user.options}>
                    <input
                      type="range"
                      className={`${user.option} ${user.priceRange}`}
                      name="price"
                      min="10"
                      max="100000"
                    />
                  </div>
                  <div className={user.filterOptionName}>Discount</div>
                  <div className={user.options}>
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Fixed
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Percentage
                    <input
                      type="radio"
                      className={user.option}
                      name="category_name"
                    />{" "}
                    Free Shipping
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <main className={user.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
