import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Nav from './Components/Shared/Nav';
import WebProjects from './Components/Pages/WebProjects';
import CaseStudy from './Components/Pages/CaseStudy';
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='website-projects' element={<WebProjects />} />
            <Route path='case-study' element={<CaseStudy />} />
            <Route path='website-projects/case-study' element={<CaseStudy />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
