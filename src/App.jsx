// React
import { createContext } from "react";
// CSS
import "./style.css";
// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import SharedLayout from "./components/SharedLayout";
import MainContent from "./components/MainContent";
// Context
import AppProvider from "./context";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<MainContent />} />
            <Route path='products' element={<></>} />
            <Route path='developers' element={<></>} />
            <Route path='company' element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
