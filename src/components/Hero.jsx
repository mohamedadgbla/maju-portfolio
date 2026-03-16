import heroImg from "../assets/register.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section
      id="index"
      className="bg-gray-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE - shows FIRST on mobile */}
        <div className="flex justify-center md:justify-end relative order-1 md:order-2">

          <div className="relative">

            <img
              src={heroImg}
              alt="Developer"
              className="w-60 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-2xl object-cover"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-white shadow-lg px-3 py-2 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3">

              <img
                src={heroImg}
                alt="mini"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs sm:text-sm font-semibold">Maju</p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  Web Developer
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* TEXT */}
        <div className="text-center md:text-left order-2 md:order-1">

          {/* Scrolling banner */}
          <div className="overflow-hidden mb-3">
            {/* <p className="text-pink-500 text-xs sm:text-sm font-semibold tracking-widest animate-scroll">
              🚀 Welcome to my portfolio • Full Stack Developer • React Specialist
            </p> */}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-black">
            Hi, I'm <span className="text-pink-500">Maju</span>
            <br />
            <span className="text-gray-700">a U.S Base.</span>
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto md:mx-0 mb-8">
            I am a passionate Software Developer with a background in Computer
            Science. I build scalable web applications using React, Node.js and
            modern technologies to deliver amazing user experiences.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-8">

            <a
              href="#"
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-pink-500 bg-white shadow-md rounded-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>

          </div>

          {/* Button */}
          <button
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 sm:px-7 py-2.5 sm:py-3 bg-pink-500 text-white text-sm sm:text-base rounded-lg hover:bg-pink-600 transition duration-300"
          >
            My Skills
          </button>

        </div>

      </div>
    </section>
  );
}

export default Home;