import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavScroll from './compunents/nav bar/nav';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Computing from './pages/Computing';
import Drama from './pages/Drama';
import Fiction from './pages/Fiction';
import History from './pages/History';
import Horor from './pages/Horor';
import Romance from './pages/Romance';

import Profile from './pages/Profile';



function App() {
  return (
    <div className="App">
      <NavScroll/>
   
      <Routes>
                           {/* login reg home */}
      <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/" element={<Home/>} />

        <Route path="/Computing" element={<Computing/>} />
        <Route path="/Drama" element={<Drama/>} />
        <Route path="/Fiction" element={<Fiction/>} />
        <Route path="/History" element={<History/>} />
        <Route path="/Horor" element={<Horor/>} />
        <Route path="/Romance" element={<Romance/>} />

        <Route path="/Profile" element={<Profile />} />





      </Routes>
    </div>
  );
}

export default App;
