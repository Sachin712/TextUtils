import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f0b39";
      showAlert("Dark mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled.", "success");
    }
  };

  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#61241cb3";
      showAlert("Maroon mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled.", "success");
    }
  };

  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#71f5ce";
      showAlert("Cyan mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled.", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          about="About"
          toggleMode={toggleMode}
          toggleMode2={toggleMode2}
          toggleMode3={toggleMode3}
        />
        <Alert alert={alert} />

        <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter text to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* }
            />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
