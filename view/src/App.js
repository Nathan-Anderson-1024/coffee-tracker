import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"
import Caffeine from './pages/Caffeine';
import TrendAnalysis from './pages/TrendAnalysis'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/caffeine" element={<Caffeine />}></Route>
        <Route path="/analyze" element={<TrendAnalysis />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
