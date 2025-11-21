import './App.css';

import Home from './home/Home';
import Settings from './home/settingPage/setting'; 
import Accounts from './home/accountPage/account';
import About from './home/aboutPage/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route (opens Home when the app loads) */}
        <Route path="/" element={<Home />} />

        {/* Settings page */}
        <Route path="/setting" element={<Settings />} />
        {/* Account page */}
        <Route path="/account" element={<Accounts />} />
         {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
