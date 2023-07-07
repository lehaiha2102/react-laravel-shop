import AddManufacturerForm from "./AddManufacturerForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function AddManufacturer() {

  return (
    <>
     <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>Create New Manufacturer</div>
      <div className={admin["dashed-line"]}></div>

     <AddManufacturerForm/>
    </>
  );
}

export default AddManufacturer;
