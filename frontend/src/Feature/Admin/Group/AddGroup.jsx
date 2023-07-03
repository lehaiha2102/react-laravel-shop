

import { useSnackbar } from "notistack";
import AddGroupForm from "./AddGroupForm";


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
      <div className="add-title text-title">Create New Groups</div>
      <div className="dashed-line"></div>

      <AddGroupForm onSubmit={handleSubmit}/>
    </>
  );
}

export default AddGroup;
