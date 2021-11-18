import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";

const routes = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/about", name: "About", element: <About /> },

  { path: "/contact", name: "Contact", element: <Contact /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar routes={routes} />
        <div className="container">
          <Routes>
            {routes.map(({ name, path, element }) => (
              <Route
                key={name}
                className="page"
                exact
                path={path}
                element={element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
