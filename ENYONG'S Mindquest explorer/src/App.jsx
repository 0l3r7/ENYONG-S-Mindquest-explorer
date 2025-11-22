import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './home/Home';
import Settings from './home/settingPage/Setting.jsx';
import About from './home/aboutPage/About.jsx'
import Account from './home/accountPage/account.jsx';

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      {/* Always render Home, even if modal is open */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />      {/* Fallback */}
        <Route path="/setting" element={<Settings />} /> {/* Fallback */}
        <Route path="/account" element={<Account />} />
      </Routes>

      {/* Modal route */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/account" element={<Account />} />
           <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          
        </Routes>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
