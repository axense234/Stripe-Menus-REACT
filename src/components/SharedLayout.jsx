// React Router
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./Navbar";
import Overlay from "./Overlay";

const SharedLayout = () => {
  return (
    <div className="shared-layout-container">
      <Navbar />
      <Overlay />
      <>
        <Outlet />
      </>
    </div>
)
};

export default SharedLayout;
