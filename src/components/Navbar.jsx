// React Icons
import { BiMenu } from "react-icons/bi";
// React Router
import { Link } from "react-router-dom";
// Data
import { pageLinks } from "../data";
// Context
import { useGlobalContext } from "../context";
// Components
import Modal from "./Modal";

const Navbar = () => {
  const {
    mobileMode: showMenu,
    initialWindowWidth,
    setCurrentPage,
    setShowCurrentPageModal,
    setShowOverlay,
  } = useGlobalContext();

  const mobileNavbar = initialWindowWidth < 1024 && showMenu;

  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <h1>stripe</h1>
      </Link>
      <Modal />
      {mobileNavbar || (
        <div className='navbar-container__pageLinks'>
          {pageLinks.map((link) => {
            return (
              <Link
                to={link.dest}
                key={link.id}
                onMouseEnter={(e) => {
                  const { top, left, right } = e.target.getBoundingClientRect();
                  setShowCurrentPageModal(true);

                  setCurrentPage({
                    content: link.label,
                    pos: {
                      x: (left + right) / 2,
                      y: top,
                    },
                  });
                }}
                onMouseLeave={() => setShowCurrentPageModal(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
      {!mobileNavbar ? (
        <button type='button'>SIGN IN</button>
      ) : (
        <BiMenu onClick={() => setShowOverlay(true)} />
      )}
    </nav>
  );
};

export default Navbar;
