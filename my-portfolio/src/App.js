import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Nav from './Components/Shared/Nav';
import WebProjects from './Components/Pages/WebProjects';
import Case from './Components/Pages/Case';


function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='website-projects' element={<WebProjects />} />
            <Route path='website-projects/case' element={<Case />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
