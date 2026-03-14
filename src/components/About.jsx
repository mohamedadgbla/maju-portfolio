import heroImg from "../assets/hero.png";

function About() {
  return (
    <section id="about" className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-500">Professional</span> Web Developer
          </h2>

          <p className="text-slate-300 mb-6 leading-relaxed">
            I am a passionate Software Developer with a background in Computer Science. 
            I specialize in building modern, scalable web applications using React, Node.js, 
            and clean architecture principles.
          </p>

          <p className="text-slate-400 mb-8 leading-relaxed">
            I enjoy solving real-world problems, improving system security, 
            and creating user-friendly digital experiences that deliver impact.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            
            <img
              src={heroImg}
              alt="About Mohamed Gbla"
              className="w-full h-full object-cover rounded-md"
            />

            {/* Decorative Ellipse */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 border-4 border-green-500 rounded-full"></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;