import Image from "next/image";
import Box from "./box";
import Link from "next/link";

export default function Card({ title, description, image, tech, github, reverse }) {
  return (
    <div
      className={`container bg-neutral-800 flex flex-col md:flex-row items-center p-4 rounded-xl gap-6 w-full max-w-5xl ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="image flex-1 flex-shrink-0 justify-center">
        <Image
          src={image}
          alt={title}
          width={450}
          height={450}
          priority
          className="rounded-lg object-cover shadow-lg shadow-blue-700/40 w-full"
        />
      </div>

      {/* About Section */}
      <div className="about flex flex-col gap-3 text-center md:text-left">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-200">{description}</p>

        {/* Tech stack boxes */}
        <div className="tech flex flex-wrap justify-center md:justify-start gap-2">
          {tech.map((t, i) => (
            <Box key={i} name={t} />
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <img src="/icons/link.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Box from "./box";

// export default function Card({ title, description, tech }) {
//   return (
//     <div className="container bg-gray-800 flex p-4 rounded-xl gap-6 w-full max-w-3xl">
//       <div className="about flex flex-col gap-3">
//         <h2 className="text-xl font-bold">{title}</h2>
//         <p className="text-sm text-gray-200">{description}</p>

//         {/* Tech stack boxes */}
//         <div className="tech flex flex-wrap gap-2">
//           {tech.map((t, i) => (
//             <Box key={i} name={t} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// // import Image from "next/image";
// // import Box from "./box";

// // export default function Card({ title, description, image, tech }) {
// //   return (
// //     <div className="container bg-gray-500 flex p-4 rounded-xl gap-6 w-full max-w-3xl">
// //       {/* Image */}
// //       <div className="image">
// //         <Image
// //           src={image}
// //           alt={title}
// //           width={200}
// //           height={200}
// //           className="rounded-lg object-cover"
// //         />
// //       </div>

// //       {/* About Section */}
// //       <div className="about flex flex-col gap-3">
// //         <h2 className="text-xl font-bold">{title}</h2>
// //         <p className="text-sm text-gray-200">{description}</p>

// //         {/* Tech stack boxes */}
// //         <div className="tech flex flex-wrap gap-2">
// //           {tech.map((t, i) => (
// //             <Box key={i} name={t} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
