import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* ===== MAIN PAGES ===== */
import Home from './home/Home';
import Settings from './home/settingPage/Setting.jsx';
import About from './home/aboutPage/about.jsx'
import Account from './home/accountPage/account.jsx';
import DailyG from './home/DailyGoals/dailyGoals.jsx';
import Ranking from './home/ranking/studentRanking.jsx'

/* ===== GAME PAGES ===== */
// Random subject selector
import Randomize from './Game/randomize.jsx';

/* Subject categories */
import MathCTG from './Game/Categories/math/mathCategory.jsx'
import SciCTG from './Game/Categories/Science/ScienceCategory.jsx'
import FiliCTG from './Game/Categories/filipino/filipinoCategory.jsx'
import ApCTG from './Game/Categories/aralingpanlipunan/aralingPanlipunan.jsx'
import EngCTG from './Game/Categories/english/englishCategory.jsx'
import MusicArtCTG from './Game/Categories/musicandart/musicAndArt.jsx'
import PeAndHealthCTG  from './Game/Categories/physicaleducationAndhealth/peAndHealth.jsx';
import GmrcCTG from './Game/Categories/gmrc/gmrc.jsx'
import TleCTG from './Game/Categories/tle/tle.jsx';

/* Quiz pages */
import ScinceQuiz from './Game/Categories/Science/ScinceQuiz.jsx';
import FilipinoQuiz from './Game/Categories/filipino/filipinoQuiz.jsx';
import AralingPanlipunanQuiz from './Game/Categories/aralingpanlipunan/aralingPanlipunanQuiz.jsx';
import EnglishQuiz from './Game/Categories/english/englishQuiz.jsx';
import MathQuiz from './Game/Categories/math/mathQuiz.jsx'
import TLEQuiz from './Game/Categories/tle/tleQuiz.jsx';
import GMRCQuiz from './Game/Categories/gmrc/gmrcQuiz.jsx';
import MusicAndArtQuiz from './Game/Categories/musicandart/musicAndArtQuiz.jsx';
import PhysicalEducationAndHealthQuiz from './Game/Categories/physicaleducationandhealth/physicalEducationAndHealthQuiz.jsx';

/* ===== Next Question PAGE ===== */
import NextQuestion from './Game/nextquestion/nextQuestion.jsx';


function App() {

  /* 
    Track the current route
    Used to support "modal routing" where the
    background page remains visible.
  */
  const location = useLocation(); 
  const state = location.state;

  return (
    <>
      {/* 
        MAIN ROUTES
        If a modal is open, render the backgroundLocation.
        Otherwise, render the current location normally.
      */}
      <Routes location={state?.backgroundLocation || location}>

        {/* CORE PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dailyGoals" element={<DailyG />} />
        <Route path="/ranking" element={<Ranking />} />

        {/* RANDOM SUBJECT ROUTE */}
        <Route path="/randomize" element={<Randomize />} />

        {/* CATEGORY PAGES */}
        <Route path="/science" element={<SciCTG />} />
        <Route path="/math" element={<MathCTG />} />
        <Route path="/filipino" element={<FiliCTG />} />
        <Route path="/english" element={<EngCTG />} />
        <Route path="/aralingpanlipunan" element={<ApCTG />} />
        <Route path="/musicart" element={<MusicArtCTG />} />
        <Route path="/pehealth" element={<PeAndHealthCTG/>} />
        <Route path="/gmrc" element={<GmrcCTG/>} />
        <Route path="/tle" element={<TleCTG/>} />

        {/* QUIZ PAGES */}
        <Route path="/science_quiz" element={<ScinceQuiz/>} />
        <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
        <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
        <Route path="/english_quiz" element={<EnglishQuiz/>} />
        <Route path="/math_quiz" element={<MathQuiz/>} />
        <Route path="/tle_quiz" element={<TLEQuiz/>} />
        <Route path="/gmrc_quiz" element={<GMRCQuiz/>} />
        <Route path="/musicart_quiz" element={<MusicAndArtQuiz/>} />
        <Route path="/peandhealth_quiz" element={<PhysicalEducationAndHealthQuiz/>} />

        {/* Next question route */}
        <Route path="/nextquestion" element={<NextQuestion/>} />
      
      </Routes>


      {/* 
        MODAL ROUTES
        Rendered only when there is a background location.
        This allows these pages to appear as modals 
        on top of the Home screen instead of full navigation.
      */}
      {state?.backgroundLocation && (
        <Routes>

          {/* REPEATED PAGES FOR MODAL DISPLAY */}
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/dailyGoals" element={<DailyG />} />
          <Route path="/ranking" element={<Ranking />} />

          {/* RANDOM & CATEGORY ROUTES */}
          <Route path="/randomize" element={<Randomize />} />
          <Route path="/science" element={<SciCTG />} />
          <Route path="/math" element={<MathCTG />} />
          <Route path="/filipino" element={<FiliCTG />} />
          <Route path="/english" element={<EngCTG />} />
          <Route path="/aralingpanlipunan" element={<ApCTG />} />
          <Route path="/musicart" element={<MusicArtCTG />} />
          <Route path="/pehealth" element={<PeAndHealthCTG/>} />
          <Route path="/gmrc" element={<GmrcCTG/>} />
          <Route path="/tle" element={<TleCTG/>} />

          {/* QUIZ ROUTES */}
          <Route path="/science_quiz" element={<ScinceQuiz/>} />
          <Route path="/filipino_quiz" element={<FilipinoQuiz/>} />
          <Route path="/aralingpanlipunan_quiz" element={<AralingPanlipunanQuiz/>} />
          <Route path="/english_quiz" element={<EnglishQuiz/>} />
          <Route path="/math_quiz" element={<MathQuiz/>} />
          <Route path="/tle_quiz" element={<TLEQuiz/>} />
          <Route path="/gmrc_quiz" element={<GMRCQuiz/>} />
          <Route path="/musicart_quiz" element={<MusicAndArtQuiz/>} />
          <Route path="/peandhealth_quiz" element={<PhysicalEducationAndHealthQuiz/>} />

          {/* Next question route */}
          <Route path="/nextquestion" element={<NextQuestion/>} />


        </Routes>
      )}
    </>
  );
}


/*
  BrowserRouter wrapper
  Ensures routing works across the entire app.
*/
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
