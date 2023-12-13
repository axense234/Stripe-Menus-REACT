// React
import { createContext, useContext, useState, useRef } from "react";
// Data
import { defaultModalCurrentPage } from "./data";
// Hooks
import useCheckWindowWidth from "./hooks/useCheckWindowWidth";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(defaultModalCurrentPage);
  const [showCurrentPageModal, setShowCurrentPageModal] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const modalRef = useRef(null);

  const mobileMode = useCheckWindowWidth(1100) || window.innerWidth < 1100;

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        currentPage,
        setCurrentPage,
        showCurrentPageModal,
        setShowCurrentPageModal,
        modalRef,
        showOverlay,
        setShowOverlay,
        mobileMode,
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
