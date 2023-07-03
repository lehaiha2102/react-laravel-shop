

import { useSnackbar } from "notistack";
import AddProductForm from "./AddProductForm";

function AddProduct() {

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
      <div className="add-title font-heading">Create New Product</div>
      <div className="dashed-line"></div>

      <AddProductForm onSubmit={handleSubmit}/>
    </>
  );
}

export default AddProduct;
