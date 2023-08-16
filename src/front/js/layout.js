import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Top10 } from "./pages/top10";
import { Bottom10 } from "./pages/bottom10";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import App from "./component/App";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Passie } from "./component/Passie";
import Private from "./component/private";
import NewsFeed from "./component/NewsFeed";
import CryptoCard from "./component/CryptoCard";
import Trending from "./component/trending";
import Portfolio from "./component/Portfolio";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermUpdate = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar setSearchTerm={handleSearchTermUpdate} />
          <Sidebar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Trending />
                  {/* <CryptoCard searchTerm={searchTerm} /> */}
                  <NewsFeed />
                </>
              }
            />
            <Route path="/App" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<Private />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/allassets"
              element={<CryptoCard searchTerm={searchTerm} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/passie" element={<Passie />} />
            <Route path="/newsfeed" element={<NewsFeed />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/single/:theid" element={<Single />} />
            <Route path="/top" element={<Top10 />} />
            <Route path="/bottom" element={<Bottom10 />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
