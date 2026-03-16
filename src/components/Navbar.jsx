import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      } bg-white`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-500">
          Maju
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-bold text-black">

          <li>
            <a href="#index">
              <span className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition">
                Home
              </span>
            </a>
          </li>

          <li>
            <a href="#about">
              <span className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition">
                About
              </span>
            </a>
          </li>

          <li>
            <a href="#skills">
              <span className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition">
                Skill
              </span>
            </a>
          </li>

          <li>
            <a href="#resume">
              <span className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition">
                resume
              </span>
            </a>
          </li>

          <li>
            <a href="#contact">
              <span className="hover:bg-pink-500 hover:text-white px-4 py-2 rounded-lg transition">
                Contact
              </span>
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-bold text-pink-500">
            Menu
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>

        </div>
<ul className="flex flex-col p-4 gap-4 font-bold text-black">

  <li>
    <a href="#index" onClick={() => setMenuOpen(false)}>
      Home
    </a>
  </li>

  <li>
    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>
  </li>

  <li>
    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skill
    </a>
  </li>

  <li>
    <a href="#resume" onClick={() => setMenuOpen(false)}>
      Resume
    </a>
  </li>

  <li>
    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </li>

</ul>
      </div>

      {/* Dark Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;



