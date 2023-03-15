// React
import { createContext, useContext, useState, useRef } from "react";
// Hooks
import useGetWindowWidth from "./hooks/useGetWindowWidth";
// Data
import { defaultModalCurrentPage } from "./data";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const initialWindowWidth = window.innerWidth;

  const [mobileMode, setMobileMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(defaultModalCurrentPage);
  const [showCurrentPageModal, setShowCurrentPageModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const modalRef = useRef(null);

  useGetWindowWidth(setMobileMode);

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        mobileMode,
        setMobileMode,
        initialWindowWidth,
        currentPage,
        setCurrentPage,
        showCurrentPageModal,
        setShowCurrentPageModal,
        modalRef,
        showOverlay,
        setShowOverlay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default AppProvider;
