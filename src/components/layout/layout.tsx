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
        <div className="w-[calc(100%-6rem)] ml-[6rem]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
