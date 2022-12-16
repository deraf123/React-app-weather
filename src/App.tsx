import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MouhtStatistics/MonthStatistics";
import { Header } from "./shared/header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className='global__container'>
      {/* <Popup /> */}
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
