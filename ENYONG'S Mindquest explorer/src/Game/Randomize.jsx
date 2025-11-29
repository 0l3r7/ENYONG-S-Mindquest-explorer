import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kween from '../PIC/kween.png'

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
    }, 300); // 1.5 sec delay (optional)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
 <div  className="
        fixed inset-0
        bg-[#081E41]
        animate-fade-in
        flex flex-col
        items-center
        justify-center
        p-3
      ">
        <img src={kween} alt="" />
    </div>
  );
}

export default Randomize;
