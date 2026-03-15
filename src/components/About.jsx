import heroImg from "../assets/register.jpg";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 dark:bg-slate-950 py-16 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            About <span className=" text-pink-500">Me</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <img
                src={heroImg}
                alt="About"
                className="w-72 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-1/2">

            <h3 className="text-2xl font-bold mb-4  text-pink-500">
              Who Am I?
            </h3>

            <p className="text-white/90 mb-4 leading-relaxed">
              I am a creative designer and UI/UX specialist based in London,
              UK, focusing on both digital platforms and print solutions.
              I find great fulfillment in turning complex problems into
              simple and elegant solutions.
            </p>

            <p className="text-white/80 mb-6 leading-relaxed">
              My core goal is to deliver your message and brand identity in
              the most engaging way possible. Through my career I have had
              the opportunity to collaborate with well-known brands.
            </p>

            {/* Personal Info */}
            <h4 className="text-xl font-semibold mb-4  text-pink-500">
              Personal Info
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                <FaPhoneAlt className=" text-pink-500" />
                <span>+123 456 7890</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                <FaEnvelope className=" text-pink-500" />
                <span>yourmail@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                <FaMapMarkerAlt className=" text-pink-500" />
                <span>London / England</span>
              </div>

              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                <FaCalendarAlt className=" text-pink-500" />
                <span>Jan 01, 2003</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;