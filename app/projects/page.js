import Card from "../components/card";
import HomeButton from "../components/home";

export default function ProjectsandWorks() {
  const projects = [
    {
      title: "Deepfake Detection",
      description:
        "A project using MesoNet to detect deepfake videos with high accuracy.",
      image: "/images/dashboard.webp",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
      github: "https://github.com/yourusername/deepfake-detector",
    },
    {
      title: "Tour Master",
      description:
        "An algorithmic project that optimizes tour paths based on cost and time.",
      image: "/images/dashboard.webp",
      tech: ["C++", "Algorithms", "Graph Theory"],
      github: "https://github.com/yourusername/deepfake-detector",
    },
    {
      title: "Social Media Analyzer",
      description:
        "A DBMS project to analyze trending topics across social media.",
      image: "/images/dashboard.webp",
      tech: ["SQL", "PHP", "JavaScript"],
      github: "https://github.com/yourusername/deepfake-detector",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-950 text-gray-300 items-center space-y-8 py-10">
      <HomeButton/>
      <h1 className="text-3xl font-bold">Works and Projects</h1>

      <div className="flex flex-col justify-center items-center space-y-10">
        {projects.map((proj, i) => (
          <Card
            key={i}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            tech={proj.tech}
            github={proj.github}

            reverse={i % 2 !== 0} // alternate: odd indexes get reversed
          />
        ))}
      </div>
    </div>
  );
}


// import Card from "../components/card";
// import Photo from "../components/photo";

// export default function ProjectsandWorks() {
//   const projects = [
//     {
//       title: "Deepfake Detection",
//       description: "A project using MesoNet to detect deepfake videos with high accuracy.",
//       image: "/images/dashboard.webp",
//       tech: ["Python", "TensorFlow", "Keras","OpenCV","Flask","CNN","Deeplearning"],
//     },
//     {
//       title: "Tour Master",
//       description: "An algorithmic project that optimizes tour paths based on cost and time.",
//       image: "/images/dashboard.webp",
//       tech: ["C++", "Algorithms", "Graph Theory"],
//     },
//     {
//       title: "Social Media Analyzer",
//       description: "A DBMS project to analyze trending topics across social media.",
//       image: "/images/dashboard.webp",
//       tech: ["SQL", "PHP", "JavaScript","XAMPP"],
//     },
//   ];

//   return (
//     <div className="flex flex-col bg-cyan-50 text-black items-center space-y-6 py-10">
//       <h1 className="text-3xl font-bold">Works and Projects</h1>

//       <div className="flex flex-col justify-center items-center space-y-6">
//         {projects.map((proj, i) => (
          
//           <Card
//             key={i}
//             title={proj.title}
//             description={proj.description}
//             tech={proj.tech}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
