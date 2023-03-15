/* eslint-disable no-undef */
// React
import { useEffect } from "react";

const useGetWindowWidth = (setShowMenu) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        //
      });
    };
  }, []);
};

export default useGetWindowWidth;
