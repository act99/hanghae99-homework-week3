import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeWork from "./pages/HomeWork";
import AnswerQ from "./pages/AnswerQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrap">
          <div className="home-work-border">
            <Routes>
              <Route path="/" element={<HomeWork />}></Route>
              <Route path="/reviews/:weekday" element={<AnswerQ />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
