import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Nav from './Components/Shared/Nav';
import WebProjects from './Components/Pages/WebProjects';
import CaseStudy from './Components/Pages/CaseStudy';
import ScrollToTop from './ScrollToTop';
import SmileTissue from './Components/Pages/Case-Study/SmileTissue';
import HakkaniGroup from './Components/Pages/Case-Study/HakkaniGroup';
import AdvancedEngr from './Components/Pages/Case-Study/AdvancedEngr';
import SalmanArefin from './Components/Pages/Case-Study/SalmanArefin';


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
            <Route path='smile-tissue' element={<SmileTissue />} />
            <Route path='website-projects/smile-tissue' element={<SmileTissue />} />
            <Route path='hakkani-group' element={<HakkaniGroup />} />
            <Route path='website-projects/hakkani-group' element={<HakkaniGroup />} />
            <Route path='advanced-engineering' element={<AdvancedEngr />} />
            <Route path='website-projects/advanced-engineering' element={<AdvancedEngr />} />
            <Route path='salman-arefin' element={<SalmanArefin />} />
            <Route path='website-projects/salman-arefin' element={<SalmanArefin />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
