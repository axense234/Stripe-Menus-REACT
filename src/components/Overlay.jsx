// React
import { useEffect, useRef } from "react";
// React Router Dom
import { Link } from "react-router-dom";
// React Icons
import { IoCloseSharp } from "react-icons/io5";
// Data
import { pageLinks, pageSubLinks } from "../data";
// Context
import { useGlobalContext } from "../context";

const Overlay = () => {
  const { showOverlay, setShowOverlay, mobileMode } = useGlobalContext();
  const overlayRef = useRef(null);

  const trueShowOverlay = showOverlay && mobileMode;

  useEffect(() => {
    let timeout;
    const overlay = overlayRef.current;
    if (trueShowOverlay) {
      overlay.style.display = "flex";
      timeout = setTimeout(() => {
        overlay.style.opacity = "1";
        overlay.style.transform = "scale(1)";
      }, 20);
    } else {
      overlay.style.opacity = "0";
      overlay.style.transform = "scale(0)";
      timeout = setTimeout(() => {
        overlay.style.display = "none";
      }, 100);
    }
  }, [trueShowOverlay]);

  return (
    <div className='overlay-container' ref={overlayRef}>
      <div className='overlay-container__content'>
        <IoCloseSharp onClick={() => setShowOverlay(false)} />
        {pageLinks.map((pageLink) => {
          const currentPageSubLinks = pageSubLinks.filter(
            (subLink) => subLink.mainLinkLabel === pageLink.label
          );
          return (
            <section className='overlay-container__section' key={pageLink.id}>
              <h2>{pageLink.label}</h2>
              <ul className='overlay-container__sectionContent'>
                {currentPageSubLinks.map((subPageLink) => {
                  return (
                    <li key={subPageLink.dest}>
                      <Link to={subPageLink.dest}>{subPageLink.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Overlay;
