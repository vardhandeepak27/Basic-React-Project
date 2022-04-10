import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
/*import Textform from './components/Textform';*/


function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About TextUtils"/>
    <div className='container'>
      {/*<Textform heading="Enter your Text here"/>*/}
      <About/>
    </div>
  
    
    
    </>
  );
}

export default App;
