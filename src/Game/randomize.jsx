import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Randomize() {
  const navigate = useNavigate();

  useEffect(() => {
    // list of categories to choose from
    const pages = [

       "/science",
       "/filipino",
       "/aralingpanlipunan",
       "/math",
       "/english", 
       "/tle",
       "/musicart",
       "/pehealth",
       "/gmrc",
      ];

    const timer = setTimeout(() => {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      if (randomPage) navigate(randomPage);
    }, 100); // 1.5 sec delay (optional)

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

    </div>
  );
}

export default Randomize;
