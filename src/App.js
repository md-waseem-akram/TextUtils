import About from "./Components/About";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alerts from "./Components/Alerts";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enabe DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Disable LightMode');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setModeText('Enable LightMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>            
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Wrtie any Words or Sentence below to Convert" mode={mode} />}></Route>            
          </Routes>
        </div>   
      </BrowserRouter>
    </>
  );
}

export default App;
