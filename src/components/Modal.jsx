// React
import { useEffect } from "react";
// React Router
import { Link } from "react-router-dom";
// React Icons
import { BsFillTriangleFill } from "react-icons/bs";
// Context
import { useGlobalContext } from "../context";
// Data
import { pageSubLinks } from "../data";

const Modal = () => {
  const { currentPage, showCurrentPageModal, modalRef } = useGlobalContext();

  const currentPageSubLinks = pageSubLinks.filter(
    (subLink) => subLink.mainLinkLabel === currentPage.content
  );

  const showModal = showCurrentPageModal;

  useEffect(() => {
    const modal = modalRef.current;
    let timeout;
    if (showModal) {
      modal.style.display = "flex";
      timeout = setTimeout(() => {
        modal.style.opacity = "1";
      }, 100);
    } else {
      modal.style.opacity = "0";
      timeout = setTimeout(() => {
        modal.style.display = "none";
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  return (
    <div
      className='modal-container'
      style={{
        top: `${currentPage.pos.y + 30}px`,
        left: `${currentPage.pos.x}px`,
      }}
      ref={modalRef}
    >
      <BsFillTriangleFill />
      <div className='modal-container__subLinks'>
        {currentPageSubLinks.map((subLink) => {
          return (
            <Link to={subLink.dest} key={subLink.id}>
              {subLink.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
