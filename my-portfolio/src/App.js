import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About';
import Nav from './Components/Shared/Nav';


function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
