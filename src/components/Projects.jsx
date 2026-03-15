import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

function Resume() {

  const education = [
    {
      title: "Diploma in Web Development",
      place: "University of London",
      year: "2018 - 2021",
      desc: "Studied modern web technologies including React, Node.js and UI design.",
    },
    {
      title: "Computer Science Degree",
      place: "Tech Institute",
      year: "2015 - 2018",
      desc: "Focused on software engineering, databases and system architecture.",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      place: "Tech Company",
      year: "2022 - Present",
      desc: "Building scalable React applications with modern UI frameworks.",
    },
    {
      title: "Junior Web Developer",
      place: "Startup Agency",
      year: "2021 - 2022",
      desc: "Developed responsive websites and collaborated with designers.",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <section id="resume" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-pink-500 font-semibold">7+ YEARS EXPERIENCE</p>
          <h2 className="text-4xl font-bold">
            My Resume
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-2 gap-16 relative">

          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-pink-500/30"></div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-2">
              <GraduationCap className="text-pink-500"/> Education
            </h3>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900 p-6 rounded-xl shadow hover:shadow-lg border border-slate-800"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>

                    <span className="text-sm bg-pink-500/20 text-pink-400 px-3 py-1 rounded">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-2">
                    {item.place}
                  </p>

                  <p className="text-slate-300 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-2">
              <Briefcase className="text-pink-500"/> Experience
            </h3>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900 p-6 rounded-xl shadow hover:shadow-lg border border-slate-800"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-lg">
                      {item.title}
                    </h4>

                    <span className="text-sm bg-pink-500/20 text-pink-400 px-3 py-1 rounded">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-2">
                    {item.place}
                  </p>

                  <p className="text-slate-300 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-24">

          <h3 className="text-2xl font-bold mb-10 text-center">
            Professional Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-pink-400">{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="bg-pink-500 h-2 rounded"
                  ></div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;