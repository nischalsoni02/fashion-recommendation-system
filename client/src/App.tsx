/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import DataContext, { AllDataProps } from "./context/dataContext";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderMain from "./components/Header/HeaderMain";
import HomePage from "./pages/HomePage/HomePage";
import Choice from "./pages/Choice/Choice";
import Footer from "./components/Footer/footer";
import { MantineProvider } from "@mantine/core";
function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageRef, setImageRef] = useState<string>("");
  const location = useLocation();
  const [allData, setAllData] = useState<Array<AllDataProps>>([
    {
      images: [],
      prompt: "",
    },
  ]);

  return (
    <div>
      <MantineProvider>
        <HeaderMain />
        <DataContext.Provider
          value={{
            isLoading,
            setIsLoading,
            imageRef,
            setImageRef,
            allData,
            setAllData,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate" element={<Choice />} />
          </Routes>
        </DataContext.Provider>

        {location.pathname === "/" && <Footer />}
      </MantineProvider>
    </div>
  );
}

export default App;
