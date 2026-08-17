import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Meetings from "./Meetings";
import Events from "./Events";
import Staff from "./Staff";
import FAQ from "./FAQ";

function RouteReset() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function Shell() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("omsm-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("omsm-theme", theme);
    } catch {
      // Local storage can be unavailable in some browsers.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <RouteReset />

      <Navbar />

      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/events" element={<Events />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
