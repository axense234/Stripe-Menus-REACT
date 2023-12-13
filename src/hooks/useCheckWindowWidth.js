/* eslint-disable no-undef */
// React
import { useEffect, useState } from "react";

const useCheckWindowWidth = (windowSize = 1110) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= windowSize) {
        setShow(false);
      } else {
        setShow(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        // Removed event
      });
    };
  }, [setShow, windowSize]);
  return show;
};

export default useCheckWindowWidth;
