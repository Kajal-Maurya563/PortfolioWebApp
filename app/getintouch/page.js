"use client";
import { useState } from "react";
import HomeButton from "../components/home";
import { SocialDock } from "../components/socialDock";

export default function GetInTouchPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <main className="bg-black text-white min-h-screen px-8 md:px-20 lg:px-40 flex flex-col items-center w-full mx-auto relative">

      <HomeButton />

      <div className="absolute bottom-20 left-8">
        <SocialDock />
      </div>

      <div className="flex flex-col justify-center items-center mt-20 mb-10">
        <h1 className="font-bold text-white text-4xl">Get In Touch</h1>
        <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words m-4">
          <p className="text-center max-w-2xl">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            voluptat.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <h4 className="mb-2">Email</h4>
            <input
              type="text"
              placeholder="please enter your email"
              className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2"
            />
          </div>

          <div className="input">
            <h4 className="mb-2">Mobile Number</h4>
            <input
              type="text"
              placeholder="Enter Mobile"
              className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2"
            />
          </div>

          <div className="input msg">
            <h4 className="mb-2">Message</h4>
            <textarea
              placeholder="Enter your Message"
              className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 w-55 md:w-80 h-40 resize-none"
            ></textarea>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-md font-semibold shadow-lg shadow-green-700/40 transition border-none w-full mb-20">
            Submit
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Your message has sent!
        </div>
      )}
    </main>
  );
}


// "use client"
// import { useState, useEffect } from "react";
// import HomeButton from "../components/home";
// import Link from "next/link";
// import { SocialDock } from "../components/socialDock";

// export default function GetInTouchPage() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowPopup(true);

//     setTimeout(() => {
//       setShowPopup(false);
//     }, 3000);
//   };

//   // 🔹 Close hamburger automatically if screen is resized to md or larger
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <main className="bg-black text-white min-h-screen px-8 md:px-20 lg:px-40 flex flex-col items-center w-full mx-auto relative">
//       <HomeButton />

//       <div className="hidden lg:flex gap-4 absolute top-6 right-8">
//         <SocialDock/>
//         {/* <Link href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
//           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
//             <img src="/icons/instagram.svg" alt="Instagram" />
//           </div>
//         </Link>
//         <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
//           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
//             <img src="/icons/linkedin.svg" alt="LinkedIn" />
//           </div>
//         </Link>
//         <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
//             <img src="/icons/github.svg" alt="GitHub" />
//           </div>
//         </Link>
//         <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
//           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
//             <img src="/icons/twitter.svg" alt="Twitter" />
//           </div>
//         </Link>
//         <Link href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
//           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
//             <img src="/icons/telegram.svg" alt="Telegram" />
//           </div>
//         </Link> */}

//       </div>

//       {/* Hamburger (only visible on small/medium) */}
//       <div
//         className="md:hidden absolute top-6 right-8 cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? (
//           // Close (X) icon
//           <img src="/icons/close.svg" alt="" />
//         ) : (
//           // Hamburger icon
//           <img src="/icons/hamburger.svg" alt=""/>
//         )}
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 right-8 bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col gap-4">
//             <SocialDock/>
//           {/* <Link href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
//           </Link>
//           <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
//           </Link>
//           <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" />
//           </Link>
//           <Link href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
//             <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6 hover:opacity-80 transition" />
//           </Link>*/}
//         </div>
//       )}

//       <div className="flex flex-col justify-center items-center mt-20 mb-10">
//         <h1 className="font-bold text-white text-4xl">Get In Touch</h1>
//         <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words m-4 ">
//           <p className="text-center max-w-2xl">
//             Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptat.
//           </p>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="space-y-6 max-w-2xl mx-auto">
//         <form onSubmit={handleSubmit}>
//           <div className="input">
//             <h4 className="mb-2">Email</h4>
//             <input type="text" placeholder="please enter your email"
//               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2" />
//           </div>

//           <div className="input">
//             <h4 className="mb-2">Mobile Number</h4>
//             <input type="text" placeholder="Enter Mobile"
//               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2" />
//           </div>

//           <div className="input msg">
//             <h4 className="mb-2">Message</h4>
//             <textarea
//               placeholder="Enter your Message"
//               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 w-55 md:w-80 h-40 resize-none"
//             ></textarea>
//           </div>

//           <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-md font-semibold shadow-lg shadow-green-700/40 transition border-none w-full mb-20">
//             Submit
//           </button>
//         </form>
//       </div>

//       {showPopup && (
//         <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
//           Your form has been submitted!
//         </div>
//       )}
//     </main>
//   );
// }
















// // "use client"
// // import { useState } from "react";
// // import HomeButton from "../components/home";
// // import Link from "next/link";

// // export default function GetInTouchPage() {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowPopup(true);

// //     setTimeout(() => {
// //       setShowPopup(false);
// //     }, 3000);
// //   };

// //   return (
// //     <main className="bg-black text-white min-h-screen px-8 md:px-20 lg:px-40 flex flex-col items-center w-full mx-auto relative">

// //       {/* Home Button (top-left) */}
// //       <HomeButton />

// //       {/* Social icons - top-right (large screens) */}
// //       <div className="hidden lg:flex gap-4 absolute top-6 right-8">
// //         <Link href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
// //           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //             <img src="/icons/instagram.svg" alt="Instagram" />
// //           </div>
// //         </Link>
// //         <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
// //           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //             <img src="/icons/linkedin.svg" alt="LinkedIn" />
// //           </div>
// //         </Link>
// //         <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
// //           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //             <img src="/icons/github.svg" alt="GitHub" />
// //           </div>
// //         </Link>
// //         <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
// //           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //             <img src="/icons/twitter.svg" alt="Twitter" />
// //           </div>
// //         </Link>
// //         <Link href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
// //           <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //             <img src="/icons/telegram.svg" alt="Telegram" />
// //           </div>
// //         </Link>
// //       </div>

// //       {/* Hamburger for sm & md */}
// //       <div
// //         className="lg:hidden absolute top-6 right-8 cursor-pointer"
// //         onClick={() => setIsMenuOpen(!isMenuOpen)}
// //       >
// //         <img src="/icons/hamburger.svg" alt="hamburger" />
// //       </div>

// //       {/* Dropdown menu for sm & md */}
// //       {isMenuOpen && (
// //         <div className="absolute top-16 right-6 bg-neutral-800 rounded-lg shadow-lg p-4 flex flex-col gap-4 z-50">
// //           <Link href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
// //             <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //               <img src="/icons/instagram.svg" alt="Instagram" />
// //             </div>
// //           </Link>
// //           <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
// //             <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //               <img src="/icons/linkedin.svg" alt="LinkedIn" />
// //             </div>
// //           </Link>
// //           <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
// //             <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //               <img src="/icons/github.svg" alt="GitHub" />
// //             </div>
// //           </Link>
// //           <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
// //             <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //               <img src="/icons/twitter.svg" alt="Twitter" />
// //             </div>
// //           </Link>
// //           <Link href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
// //             <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center shadow-md transition">
// //               <img src="/icons/telegram.svg" alt="Telegram" />
// //             </div>
// //           </Link>
// //         </div>
// //       )}

// //       {/* Page heading */}
// //       <div className="flex flex-col justify-center items-center mt-20 mb-10">
// //         <h1 className="font-bold text-white text-4xl">Get In Touch</h1>
// //         <div className="text-xs sm:text-sm md:text-xl text-gray-400 break-words m-4 ">
// //           <p className="text-center max-w-2xl">
// //             Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptat.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Form */}
// //       <div className="space-y-6 max-w-2xl mx-auto">
// //         <form onSubmit={handleSubmit}>
// //           <div className="input">
// //             <h4 className="mb-2">Email</h4>
// //             <input type="text" placeholder="please enter your email"
// //               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2" />
// //           </div>

// //           <div className="input">
// //             <h4 className="mb-2">Mobile Number</h4>
// //             <input type="text" placeholder="Enter Mobile"
// //               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-10 md:w-80 sm:py-2" />
// //           </div>

// //           <div className="input msg">
// //             <h4 className="mb-2">Message</h4>
// //             <textarea
// //               placeholder="Enter your Message"
// //               className="placeholder-gray-400 text-black bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8 w-55 md:w-80 h-40 resize-none"
// //             ></textarea>
// //           </div>

// //           <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 md:px-10 py-2 md:py-3 rounded-md font-semibold shadow-lg shadow-green-700/40 transition border-none w-full mb-20">
// //             Submit
// //           </button>
// //         </form>
// //       </div>

// //       {showPopup && (
// //         <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
// //           Your form has been submitted!
// //         </div>
// //       )}
// //     </main>
// //   );
// // }
