import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'blue'
      showAlert("Dark Mode has been enabled", "success")
      // document.title = "Title- Dark Mode" // to change the title of page
      // setInterval(() => {
      //   document.title = "Text Utilis is amazing"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install Text Utilis"
      // }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      // document.title = "Title- Light Mode"
    }
  }

  // const pressed = (col) =>{
  //     document.body.style.backgroundColor = col
  // }

  const oth = (col) => {
    document.body.style.backgroundColor = col
  }

  const removeClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const thirds = (cols) => {
    removeClasses(); // we need to do this to remove the previous classes that have been added on when they r being clicked, coz it would display only that one which is the first one in the class 
    document.body.classList.add('bg-'+cols);
  }

  return (

    <>

      <Router>
        <Navbar title="TextUtilis" aboutText="About TextUtils" /*{others={oth}}*/ third = {thirds} mode={mode} toggler={toggleMode} />
        <Alert alert={alert} />
        <Routes>

          <Route exact path="/about" element={<About mode={mode} />}></Route>

          <Route exact path="/" element={<TextForm textalert={showAlert} heading="Enter your text to analyze" mode={mode} />}> </Route>

        </Routes>
      </Router>

    </>
  );
}

// Navbar here is my component & 'title' which I passed into the component is my prop.

export default App;
