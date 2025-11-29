import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shrek from './Categories/CategoriesLogo/shrek.jpg'

function Randomize() {
  const navigate = useNavigate();

  useEffect(() => {
    // list of categories to choose from
    const pages = [
        "/science", 
        "/math", 
        "/filipino", 
        "/english",
        "/aralingpanlipunan", 
        "/musicart",
        "/pehealth",
        "/gmrc",
        "/tle"
      ];

    const timer = setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      navigate(randomPage);
    }, 1500); // 1.5 sec delay (optional)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center">
        <img src= {shrek} alt="" />
    </div>
  );
}

export default Randomize;
