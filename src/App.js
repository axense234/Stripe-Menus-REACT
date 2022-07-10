import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
// CSS
import "./style.css";
// Modal
import { Modal } from "./Modal";
// MenuUI
import { MenuUI } from "./MenuUI";

const modal = createContext();

export const App = () => {
  const windowWidth = useRef(1980);
  const [showMenu, setShowMenu] = useState(true);
  const [modalContent, setModalContent] = useState("test");
  const [triggerReRender, setTriggerReRender] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      windowWidth.current = window.innerWidth;
      if (windowWidth.current <= 750) {
        setShowMenu(true);
      } else if (windowWidth.current > 750) {
        setShowMenu(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return (
    <modal.Provider value={setModalContent}>
      <Navbar
        toggleMenu={showMenu}
        showMenu={showMenu}
        modalContent={modalContent}
      ></Navbar>
      {triggerReRender ? null : setTriggerReRender(true)}
      <Content showImage={!showMenu}></Content>
    </modal.Provider>
  );
};

const Navbar = ({ showMenu, modalContent }) => {
  const menusRef = useRef({ current: <p>Gay</p> });
  const changeModal = useContext(modal);
  const [triggerContent, setTriggerContent] = useState(false);
  const buttonRef = useRef();

  const handleMenu = () => {
    setTriggerContent(!triggerContent);
    buttonRef.current.disabled = "true";
  };

  useEffect(() => {
    let variableName = menusRef.current;
    if (!showMenu) {
      menusRef.current.addEventListener("mouseover", (e) => {
        if (e.target.textContent === "Products") {
          changeModal("Products");
        } else if (e.target.textContent === "Developers") {
          changeModal("Developers");
        } else if (e.target.textContent === "Company") {
          changeModal("Company");
        }
      });
      document.body.addEventListener("mouseover", (e) => {
        if (
          e.target.classList.contains("navbar") ||
          e.target.classList.contains("x")
        ) {
          changeModal("");
        }
      });
      return () => {
        variableName.removeEventListener("mouseover", () => changeModal(""));
        document.body.removeEventListener("mouseover", () => {});
      };
    }
    return null;
  });

  if (showMenu) {
    return (
      <div className='navbar' ref={menusRef}>
        <h1 id='company-name'>stripe</h1>
        <button
          id='menu-button'
          onClick={() => {
            handleMenu();
          }}
          ref={buttonRef}
        >
          <MenuUI triggerContent={triggerContent}></MenuUI>
          <div className='menu'>
            <hr />
            <hr />
            <hr />
          </div>
        </button>
      </div>
    );
  }
  return (
    <div className='navbar'>
      <h1 id='company-name'>stripe</h1>
      <div className='menus' ref={menusRef}>
        <div className='modal-container'>
          <a href='./products.html'>Products</a>
          {modalContent === "Products" ? (
            <Modal modalContent={modalContent}></Modal>
          ) : null}
        </div>
        <div className='modal-container'>
          <a href='./developers.html'>Developers</a>
          {modalContent === "Developers" ? (
            <Modal modalContent={modalContent}></Modal>
          ) : null}
        </div>
        <div className='modal-container'>
          <a href='./company.html'>Company</a>
          {modalContent === "Company" ? (
            <Modal modalContent={modalContent}></Modal>
          ) : null}
        </div>
      </div>
      <button id='signin-button'>Sign in</button>
    </div>
  );
};

const Content = ({ showImage }) => {
  return (
    <section className='x'>
      <div className='info'>
        <p id='info-title'>Payments infrastrucutre for the internet</p>
        <p id='info-content'>
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripes software and APIs to accept payments, send payouts, and manage
          their businesses online.
        </p>
        <button id='startnow-button'>Start now</button>
      </div>
      {showImage ? (
        <img
          src='https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg'
          alt=''
        />
      ) : null}
    </section>
  );
};
