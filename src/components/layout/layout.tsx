import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Sidebar from "./sidebar";

interface Props {
  children?: ReactNode;
}
const Layout: React.FC<Props> = () => {
  return (
    <div>
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
