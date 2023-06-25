// import About from "./Components/About";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  } 

  return (
    <>
    <Navbar title="TextUtils" about="About"  mode={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading ="Wrtie any Words or Sentence below to Convert"/>  
    </div>
    {/* <div className="container my-4">
      <About/>
    </div> */}
   </>
  );
}

export default App;
