import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Film from "./pages/Film";
import Film2 from "./pages/Film2";
import Search from "./pages/Search";

import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path={"/"} element={<Main />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/Search"} element={<Search />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/film"} element={<Film />} />
          <Route path={"/film2"} element={<Film2 />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
