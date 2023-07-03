
import Header from "./Header";
import './css/style.scss';
import './css/mobile.scss';
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";

function Main({ children }) {
  return (
    <div>
       <ToastContainer/>
      <Header />

      <div className="container">
        <Sidebar />

        <main className="content">
          {children}
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Main;
