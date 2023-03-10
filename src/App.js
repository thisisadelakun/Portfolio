import './App.css';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProjects from './Components/MyProjects';
import Contact from './Components/Contact';
import NavBars from './Components/NavBars';
import Home from './Components/Home';




function App() {
  return (
    <div className="App">
           
      <BrowserRouter>
      <NavBars/>
        <Routes> 
          <Route index element={<Home/>} />
          <Route path='About' element={<About />} />
          <Route path='MyProjects' element={<MyProjects />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
