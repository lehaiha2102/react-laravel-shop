
import AddCategoryForm from "./AddCategoryForm";

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
      <div className="add-title text-title">Create New Category</div>
      <div className="dashed-line"></div>

      <AddCategoryForm  onSubmit={handleSubmit} />
    </>
  );
}

export default AddCategory;
