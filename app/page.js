import Company from "./components/company";
import Navbar from "./components/Navbar";
import { SparklesPreview } from "./components/sparklesPreview";

export default function Home() {
  return (
    <main className="relative text-white px-8 md:px-20 lg:px-40">
      {/* ✅ Background sparkles (fixed to screen) */}
      <SparklesPreview />

      {/* Foreground content */}
      <Navbar />

      <section className="flex flex-col sm:flex-row md:flex-row items-center justify-around py-10 sm:py-16 md:py-20 gap-6 relative z-10">
        {/* Left side */}
        <div className="left max-w-lg space-y-4 sm:space-y-2 text-center sm:text-left">
          <div className="text-4xl sm:text-2xl md:text-5xl font-bold">Your Name here</div>

          <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words">
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-full shrink-0">
          <img
            src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
            alt="Profile"
            className="w-90 h-90 sm:w-40 sm:h-40 md:w-90 md:h-90 object-cover rounded-full shadow-lg shadow-green-700/40 transition"
          />
        </div>
      </section>

      <section className="flex flex-col justify-around mt-10 gap-4 md:mt-8 relative z-10">
        <h4 className="font-white mx-19">Worked with</h4>
        <div className="flex space-x-6 overflow-x-auto mx-19">
          <Company logo="💻" name="ClickUp" />
          <Company logo="☁️" name="Dropbox" />
          <Company logo="💳" name="Paychex" />
          <Company logo="🔍" name="Elastic" />
          <Company logo="💰" name="Stripe" />
        </div>
      </section>
    </main>
  );
}


// import Company from "./components/company";
// import Navbar from "./components/Navbar";
// import Link from "next/link";
// import { SparklesPreview } from "./components/sparklesPreview";

// export default function Home() {
//   return (
//     <main className="relative bg-black text-white min-h-screen px-8 md:px-20 lg:px-40 overflow-hidden">

//       {/* Sparkles background */}
//       <SparklesPreview />
//       <Navbar />

//       <section className="flex flex-col sm:flex-row md:flex-row items-center justify-around py-10 sm:py-16 md:py-20 gap-6">
//         {/* Left side */}
//         <div className="left max-w-lg space-y-4 sm:space-y-2 text-center sm:text-left">
//           <div className="text-4xl sm:text-2xl md:text-5xl font-bold">Your Name here</div>

//           <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words">
//             <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptate.</p>
//           </div>

//           {/* <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-md font-semibold shadow-lg shadow-green-700/40 transition border-none">
//             Let's get Start
//           </button> */}

          
//         </div>

//         {/* Right side */}
//         <div className="rounded-full shrink-0">
//           <img
//             src="https://static-cse.canva.com/blob/1911653/tools_transparent-background_promo-showcase_01-AFTER.jpg"
//             alt="Profile"
//             className="w-90 h-90 sm:w-40 sm:h-40 md:w-90 md:h-90 object-cover rounded-full shadow-lg shadow-green-700/40 transition"
//           />
//         </div>
//       </section>


//       <section className="flex flex-col justify-around mt-10 gap-4 md:mt-8">
//         <h4 className="font-white mx-19">Worked with</h4>
//         <div className="flex space-x-6 overflow-x-auto mx-19">
//           <Company logo="💻" name="ClickUp" />
//           <Company logo="☁️" name="Dropbox" />
//           <Company logo="💳" name="Paychex" />
//           <Company logo="🔍" name="Elastic" />
//           <Company logo="💰" name="Stripe" />
//         </div>

//       </section>
//     </main>
//   );
// }
