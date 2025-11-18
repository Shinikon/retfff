import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Search from "./pages/Search";
import User from "./pages/User";
import Films from "./pages/Films";
import Series from "./pages/Series";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path={"/"} element={<Main />} />
          <Route path={"/Search"} element={<Search />} />
          <Route path={"/user"} element={<User />} />
          <Route path={"/films"} element={<Films />} />
          <Route path={"/series"} element={<Series />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
