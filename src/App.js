import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js'
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  // setInterval(() => {
  //   document.title = "Wow Latest News I am Live"
  // },2000)
  // setInterval(() => {
  //   document.title = "Xoieyaaa ru"
  // },1500)

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)
  // const [toggleAboutMode, setToggleAboutMode] = useState("primary")

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  // let [colorMode, setColorMode] = useState("dark"); //we can also change the color of "enable dark mode" using if else statement

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1938";
      document.getElementById("greenMode").setAttribute("disabled", "")
      // document.getElementById("about").style.color = "white";
      // setToggleAboutMode("dark")
      // showAlert("success", "Dark mode is enabled")

      // setColorMode("light")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.getElementById("greenMode").removeAttribute("disabled")
      // document.getElementById("about").style.color = "black";
      // setToggleAboutMode("primary")
      // showAlert("success", "Light mode is enabled")
      // setColorMode("dark")
    }
  }

  const toggleMode_two = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "green";
      document.getElementById("darkMode").setAttribute("disabled", "")
      // document.getElementById("about").style.color = "white";
      // setToggleAboutMode("success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.getElementById("darkMode").removeAttribute("disabled")
      // document.getElementById("about").style.color = "black";
      // setToggleAboutMode("primary")
    }
  }

  return (
    <>
      {/* // <BrowserRouter> */}
        {/* <Navbar home="MyHome" about="AboutUs"/> */}
        {/* <Navbar/> */}
        <Navbar home="Home" about="AboutUs" mode={mode} toggleMode={toggleMode} toggleMode_two={toggleMode_two}/*colorMode={colorMode}*/ />
        <Alert alert={alert} />

        {/* <Routes> */}
        {/* <Route path="/about" element={<About btn={toggleAboutMode}/>} /> */}
        {/* <Route path="/" element={<TextArea showAlert={showAlert} heading="Enter text here" uppercaseConverter="Convert to uppercase" lowercaseConverter="Convert to lowercase" mode={mode} />} /> */}
        <TextArea showAlert={showAlert} heading="Enter text here" uppercaseConverter="Convert to uppercase" lowercaseConverter="Convert to lowercase" mode={mode} />
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      </>
  );
}

export default App;
