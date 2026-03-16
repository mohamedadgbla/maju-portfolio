// function Services() {
//   const services = [
//     {
//       title: "Web Design",
//       description:
//         "Designing responsive and modern websites focused on performance, usability, and clean UI.",
//       icon: "💻",
//       highlight: true,
//     },
//     {
//       title: "UI / UX Design",
//       description:
//         "Creating intuitive user interfaces and seamless user experiences with modern design principles.",
//       icon: "🎨",
//       highlight: false,
//     },
//     {
//       title: "Web Developer",
//       description:
//         "Building responsive and modern systems focused on performance, usability, and clean UI.",
//       icon: " ",
//       highlight: true,
//     },
//     {
//       title: "Mobile Developer",
//       description:
//         "Building responsive and Mobile Apps with React native focused on performance, usability, and clean UI",
//       icon: " ",
//       highlight: true,
//     },
//   ];

//   return (
//     <section id="services" className="bg-slate-900 dark:bg-slate-950 text-white py-24">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Section Title */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           MY<span className="text-green-500">SERVICES</span>
//         </h2>
//         <p className="text-slate-400 mb-16">
//           What I can help you with
//         </p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`p-8 rounded-xl transition duration-300 shadow-md hover:shadow-xl
//                 ${
//                   service.highlight
//                     ? "bg-green-950"
//                     : "bg-slate-800"
//                 }`}
//             >
//               {/* Icon */}
//               <div
//                 className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full text-2xl
//                   ${
//                     service.highlight
//                       ? "bg-white text-slate-900"
//                       : "bg-green-500 text-white"
//                   }`}
//               >
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-4">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className={`mb-6 leading-relaxed
//                   ${
//                     service.highlight
//                       ? "text-green-300"
//                       : "text-slate-300"
//                   }`}
//               >
//                 {service.description}
//               </p>

//               {/* Button */}
//               <button
//                 className={`px-6 py-2 rounded-lg transition duration-300
//                   ${
//                     service.highlight
//                       ? "bg-white text-slate-900 hover:bg-green-500 hover:text-white"
//                       : "bg-green-500 hover:bg-green-600"
//                   }`}
//               >
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Services;

import {
  Briefcase,
  BookOpen,
  Calendar,
  Shield,
  Wifi,
  Cpu,
} from "lucide-react";

function Services() {
  const services = [
    {
      title: "Business Strategy",
      description:
        "Research and discovery for a client’s idea to create the best solution.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "App Development",
      description:
        "It uses a dictionary of over 200 Latin words combined with a handful of model sentence.",
      icon: <BookOpen size={28} />,
    },
    {
      title: "App Development",
      description:
        "Ensure your next strategy and process development are done to the work.",
      icon: <Calendar size={28} />,
    },
    {
      title: "Mobile Apps",
      description:
        "Ensure your mobile app campaign is effective and efficient for the best results.",
      icon: <Shield size={28} />,
    },
    {
      title: "CEO Marketing",
      description:
        "Always free from repetition injected humour or non-characteristic words etc.",
      icon: <Wifi size={28} />,
    },
    {
      title: "Personal Portfolio April",
      description:
        "It uses a dictionary of over 200 Latin words combined with a handful of model sentence.",
      icon: <Cpu size={28} />,
    },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <p className="text-pink-500 text-4xl font-bold mb-3 text-center">Service</p>
        <h4 className="text-2xl font-semibold mb-12 text-gray-800 text-center">
          What I Do
        </h4>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Icon */}
              <div className="text-pink-500 mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;