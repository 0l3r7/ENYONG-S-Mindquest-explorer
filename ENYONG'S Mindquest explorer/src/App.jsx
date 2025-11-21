import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './home/Home';
import Settings from './home/settingPage/setting.jsx';

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      {/* Always render Home, even if modal is open */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Modal route */}
      {state?.backgroundLocation && (
        <Routes>
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
