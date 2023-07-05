import { ToastContainer } from "react-toastify";
import Header from "./Header";
import "./assets/style.css";
function Main({children}) {
  return (
    <div>
      <ToastContainer />
      <Header />

      <div className="container">
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default Main;
