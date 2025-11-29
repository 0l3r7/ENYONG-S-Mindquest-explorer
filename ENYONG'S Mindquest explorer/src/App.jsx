import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './home/Home';
import Settings from './home/settingPage/Setting.jsx';
import About from './home/aboutPage/about.jsx'
import Account from './home/accountPage/account.jsx';
import DailyG from './home/DailyGoals/dailyGoals.jsx';

{/*Ctg = category hehehe this is the path for subject category*/}
import Randomize from './Game/Randomize.jsx';
import MathCTG from './Game/Categories/Math/MathCategory.jsx'
import SciCTG from './Game/Categories/Science/ScienceCategory.jsx'
import FiliCTG from './Game/Categories/Filipino/FilipinoCategory.jsx'
import ApCTG from './Game/Categories/AralingPanlipunan/AralingPanlipunan.jsx'
import EngCTG from './Game/Categories/English/EnglishCategory.jsx'
import MusicArtCTG from './Game/Categories/MusicAndArt/MusicAndArt.jsx'
import PeAndHealthCTG  from './Game/Categories/PhysicalEducationAndHealth/PeAndHealth.jsx';


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
        

         {/* RANDOMIZE ROUTE SUBJECTS */}
        <Route path="/randomize" element={<Randomize />} />
        <Route path="/science" element={<SciCTG />} />
        <Route path="/math" element={<MathCTG />} />
        <Route path="/filipino" element={<FiliCTG />} />
        <Route path="/english" element={<EngCTG />} />
        <Route path="/aralingpanlipunan" element={<ApCTG />} />
        <Route path="/musicart" element={<MusicArtCTG />} />
        <Route path="/pehealth" element={<PeAndHealthCTG/>} />
      </Routes>

      {/* Modal route */}
      {state?.backgroundLocation && (
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/account" element={<Account />} />
           <Route path="/about" element={<About />} />
            <Route path="/setting" element={<Settings />} />
           <Route path="/dailyGoals" element={<DailyG />} />

            {/* RANDOMIZE ROUTE SUBJECTS */}
          <Route path="/randomize" element={<Randomize />} />
          <Route path="/science" element={<SciCTG />} />
          <Route path="/math" element={<MathCTG />} />
          <Route path="/filipino" element={<FiliCTG />} />
          <Route path="/english" element={<EngCTG />} />
          <Route path="/aralingpanlipunan" element={<ApCTG />} />
          <Route path="/musicart" element={<MusicArtCTG />} />
          <Route path="/pehealth" element={<PeAndHealthCTG/>} />
          
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
