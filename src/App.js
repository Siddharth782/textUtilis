import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'

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

  return (
    <>
      <Navbar title="TextUtilis" aboutText="About TextUtils" mode={mode} toggler={toggleMode} />
      <Alert alert={alert} />
      <TextForm textalert = {showAlert} heading="Enter your text to analyze" mode={mode} />
      {/* <About mode={mode}/> */}
    </>
  );
}

// Navbar here is my component & 'title' which I passed into the component is my prop.

export default App;
