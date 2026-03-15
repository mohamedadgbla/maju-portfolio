import heroImg from "../assets/register.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-100  min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <marquee>
          <p className="text-gray-500 uppercase tracking-widest mb-2">
            Welcome to my portfolio
          </p>
          </marquee>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-black">
            Hi, I'm{" "}
            <span className="text-pink-500">Maju</span>
            <br />
            a U.S Base.
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8">
            I am a passionate Software Developer with a background in Computer
            Science. I build scalable web applications using React, Node.js and
            modern technologies to deliver amazing user experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center  text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center  text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
          >
            My Skills
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end relative">

          <div className="relative">

            <img
              src={heroImg}
              alt="Developer"
              className="w-72 sm:w-80 lg:w-96 rounded-xl shadow-2xl object-cover"
            />

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg p-4 rounded-xl flex items-center gap-3">
              
              <img
                src={heroImg}
                alt="mini"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold">Maju</p>
                <p className="text-xs text-gray-500">Web Developer</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;