import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path={"/"} element={<Main />} />
          <Route path={"/aboutUs"} element={<AboutUs />} />
          <Route path={"/blog"} element={<Blog />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
