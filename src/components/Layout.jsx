import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
