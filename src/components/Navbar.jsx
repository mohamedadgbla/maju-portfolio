import { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-md"} bg-white `}>
      <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold
         text-pink-500">
          Maju
        </h1>

        <ul className="flex ">
          <li className="flex flex-row text-justify text-center text-black font-bold m-2 p-2  "><a href="#"><h3 className="hover:bg-pink-500 text-black px-5 py-2 rounded-lg ">Home</h3></a></li>
          <li className="flex flex-row text-justify text-center text-black font-bold m-2 p-2"><a href="#about"><h3 className="hover:bg-pink-500  text-black px-5 py-2 rounded-lg  ">About</h3></a></li>
          <li className="flex flex-row text-justify text-center text-black font-bold m-2 p-2"><a href="#skills"><h3 className="hover:bg-pink-500  text-black px-5 py-2 rounded-lg  ">Skill</h3></a></li>
           <li className="flex flex-row text-justify text-center text-black font-bold m-2 p-2"><a href="#projects"><h3 className="hover:bg-pink-500  text-black px-5 py-2 rounded-lg  ">project</h3></a></li>
          <li className="flex flex-row text-justify text-center text-black font-bold m-2 p-2 "><a href="#contact"><h3 className="hover:bg-pink-500  text-black px-5 py-2 rounded-lg  ">Contact</h3></a></li>
        </ul>

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;