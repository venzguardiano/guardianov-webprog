import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f5', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '80px', width: '100%' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;