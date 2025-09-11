import HomeButton from "../components/home";
import Image from "next/image";
import SkillCard from "../components/skillCard";
import { SparklesPreview } from "../components/sparklesPreview";

export default function Skills({ logo, name }) {

  const skills = [
    { name: "React", logo: "/logos/react.png" },
    { name: "Next.js", logo: "/logos/react.png" },
    { name: "Next.js", logo: "/logos/react.png" },
    { name: "Next.js", logo: "/logos/react.png" },
    { name: "Next.js", logo: "/logos/react.png" },
    { name: "Node.js", logo: "/logos/nodejs.png" },
    { name: "PHP", logo: "/logos/php.png" },
    { name: "PHP", logo: "/logos/php.png" },
    { name: "PHP", logo: "/logos/php.png" },
    { name: "PHP", logo: "/logos/php.png" },
    { name: "MongoDb", logo: "/logos/mongo.png" },
    { name: "MongoDb", logo: "/logos/mongo.png" },
    { name: "MongoDb", logo: "/logos/mongo.png" },
    { name: "MongoDb", logo: "/logos/mongo.png" },
    { name: "MongoDb", logo: "/logos/mongo.png" },
    { name: "MySQL", logo: "/logos/mysql.png" },
    // Add more skills here
  ];

  return (
    // <div className="flex flex-col bg-black text-gray-300 items-center space-y-8 py-10 min-h-screen">
    <div className="flex flex-col text-gray-300 items-center space-y-8 py-10 relative">
      <SparklesPreview/>

      <HomeButton />
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words m-4 ">
        <p className="text-center max-w-2xl">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptat.</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-10 gap-6 my-10 bg-black">
        {skills.map((skill, i) => (
          <SkillCard key={i} logo={skill.logo} name={skill.name} />
        ))}
      </div>

    </div>
  );
}
