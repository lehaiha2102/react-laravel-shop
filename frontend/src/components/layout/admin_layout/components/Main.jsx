
import Header from "./Header";
import admin from './css/style.module.scss';
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";

function Main({ children }) {
  return (
    <div>
       <ToastContainer/>
      <Header />

      <div className={admin.container}>
        <Sidebar />

        <main className={admin.content}>
          {children}
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Main;
