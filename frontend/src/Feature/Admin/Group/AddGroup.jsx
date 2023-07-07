

import { useSnackbar } from "notistack";
import AddGroupForm from "./AddGroupForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";



function AddGroup() {

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // const action = login(values);
      // const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);
      // enqueueSnackbar("login successfully!", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <>
     <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>Create New Groups</div>
      <div className={admin["dashed-line"]}></div>

      <AddGroupForm onSubmit={handleSubmit}/>
    </>
  );
}

export default AddGroup;
