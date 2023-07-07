import AddCategoryForm from "./AddCategoryForm";
import admin from "../../../components/layout/admin_layout/components/css/style.module.scss";

function AddCategory() {
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      enqueueSnackbar("login successfully!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <>
      <div className={`${admin["add-title"]} ${admin["font-heading"]}`}>
        Create New Category
      </div>
      <div className={admin["dashed-line"]}></div>

      <AddCategoryForm onSubmit={handleSubmit} />
    </>
  );
}

export default AddCategory;
