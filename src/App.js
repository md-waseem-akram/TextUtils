// import About from "./Components/About";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enabe DarkMode');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setModeText('Disable LightMode');
      document.body.style.backgroundColor = 'dark';
    }else{
      setMode('light');
      setModeText('Enable LightMode');
      document.body.style.backgroundColor = 'light';
    }
  } 

  return (
    <>
    <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <div className="container">
      <TextForm heading ="Wrtie any Words or Sentence below to Convert" mode={mode}/>  
    </div>
    {/* <div className="container my-4">
      <About/>
    </div> */}
   </>
  );
}

export default App;
