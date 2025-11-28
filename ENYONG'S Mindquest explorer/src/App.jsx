import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './home/Home';
import Settings from './home/settingPage/Setting.jsx';
import About from './home/aboutPage/about.jsx'
import Account from './home/accountPage/account.jsx';
import DailyG from './home/DailyGoals/dailyGoals.jsx';
import MathCTG from './Game/Categories/Math/MathCategory.jsx'
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
        <Route path="/dailyGoals" element={<DailyG />} />
        <Route path="/math" element={<MathCTG />} />
      </Routes>

      {/* Modal route */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/account" element={<Account />} />
           <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/dailyGoals" element={<DailyG />} />
          <Route path="/math" element={<MathCTG />} />
          
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
