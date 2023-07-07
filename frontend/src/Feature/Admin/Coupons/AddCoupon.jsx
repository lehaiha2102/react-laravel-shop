
import AddCouponForm from "./AddCouponForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function AddCoupon() {


  return (
    <>
     <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>Create New Coupon</div>
      <div className={admin["dashed-line"]}></div>

     <AddCouponForm/>
    </>
  );
}

export default AddCoupon;
