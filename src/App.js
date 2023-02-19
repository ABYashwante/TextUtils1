import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import Nandu from "./Components/Nandu";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";   


function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setalert] = useState(null);

function showAlert(message, type) {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

function toggleMode() {
    let m;
    if (mode === "dark") {
      m = "light";
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "primary");
      document.title = "textUtils - Light Mode"; //to set the title of the page
    } else {
      m = "dark";
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "textUtils - Dark Mode"; //to set the title of the page
    }
    setMode(m);
  }


  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" toggle={toggleMode} mode={mode} />
      <Alert alert={alert} />

      <div className="container my-3"> 
      <TextForm heading="Enter the Text" set={showAlert} />
      </div>
      
        {/* <Routes> */}
        {/* <Route exact path="/" element={ */}
        {/* <TextForm heading="Enter the Text" set={showAlert} /> */}
        {/* }></Route> */}
        {/* <Route exact path="/chutya" element={ */}
        {/* <About /> */}
        {/* }></Route> */}
        {/* <Route exact path="/nandu" element={<Nandu/>}></Route> */}
        {/* </Routes> */}
    {/* </Router>  */} 
  </>
  );
}


export default App;
