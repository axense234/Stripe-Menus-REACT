// React Router
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./Navbar";
import Overlay from "./Overlay";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Overlay />
      <>
        <Outlet />
      </>
    </>
  );
};

export default SharedLayout;
