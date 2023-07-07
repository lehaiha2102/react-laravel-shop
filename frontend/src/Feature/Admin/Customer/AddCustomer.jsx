
import AddCustomerForm from "./AddCustomerForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function AddCustomer() {


  return (
    <>
     <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>Create New Customer</div>
      <div className={admin["dashed-line"]}></div>

     <AddCustomerForm/>
    </>
  );
}

export default AddCustomer;
