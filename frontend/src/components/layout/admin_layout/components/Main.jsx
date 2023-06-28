
import Header from "./Header";
import './css/style.scss';
import Sidebar from "./sidebar";

function Main({ children }) {
  return (
    <div>
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
