import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const[mode,setMode]=useState('light');
  const[rmode,rsetMode]=useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743"
      }
    
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
      }
      
  }

  const rtoggleMode=()=>{
    if(rmode==='light'){
      rsetMode('#F88379');
      document.body.style.backgroundColor="#F88379"
    }
    else{
      rsetMode('light');
      document.body.style.backgroundColor="white"
    }
  }


  return (
    <>
        <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} rmode={rmode} rtoggleMode={rtoggleMode}/>
      <Routes>
        <Route exact path="/" element={<Textform heading="Enter your Text here" mode={mode}/>}/>
          <Route exact path="/about" element={<About />}/>
          
      
        
      </Routes>
      
    </BrowserRouter>,
    
    
    
      </>
  );
}

export default App;
