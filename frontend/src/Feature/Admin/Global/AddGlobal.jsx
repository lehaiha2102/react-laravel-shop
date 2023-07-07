
import EditGlobalForm from "./EditGlobalForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";


function EditGlobal() {


  return (
    <>
     <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>Edit Global</div>
      <div className={admin["dashed-line"]}></div>

     <EditGlobalForm/>
    </>
  );
}

export default EditGlobal;
