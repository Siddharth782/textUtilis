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
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'blue'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtilis" aboutText="About TextUtils" mode={mode} toggler={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter your text to analyze" mode={mode} />
      {/* <About mode={mode}/> */}
    </>
  );
}

// Navbar here is my component & 'title' which I passed into the component is my prop.

export default App;
