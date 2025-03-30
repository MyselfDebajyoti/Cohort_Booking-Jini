// // TeamCards.jsx
// import Image from "next/image";

// const TeamCards = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       username: "senguptasomuchdeep",
//       role: "CodeCrushers",
//       imageUrl: "/WhatsApp Image 2025-03-24 at 1.50.44 AM.jpeg",
//       fullName: "Soumojit Sengupta",
//       description:
//         "UI/UX and Web Development enthusiast. Passionate about the intersection of creativity and technology.",
//       likes: "1",
//     },
//     {
//       id: 2,
//       username: "debstructive_",
//       role: "CodeCrushers",
//       imageUrl: "/WhatsApp Image 2025-03-23 at 23.02.47.jpeg",
//       fullName: "Debajyoti Chatterjee",
//       description:
//         "Full Stack developer from Kolkata, loves football, coding and listening Hip Hop. Currently building an e-commerce platform for local businesses.",
//       likes: "1",
//     },
//     {
//       id: 3,
//       username: "shaurya_sawai_",
//       role: "CodeCrushers",
//       imageUrl: "/WhatsApp Image 2025-03-24 at 01.20.09.jpeg",
//       fullName: "Shouryaman Samal",
//       description:
//         "Tech enthusiast specializing in full-stack development, AI, and machine learning. Passionate about AI-driven solutions, from health monitoring to disaster management, using Django, React, and data analytics. Exploring NLG and multi-word AI applications.",
//       likes: "1",
//     },
//     {
//       id: 4,
//       username: "mepeonny",
//       role: "CodeCrushers",
//       imageUrl: "/484280458_1808496523337587_4163298229361372390_n.jpg",
//       fullName: "Manisha Kumari",
//       description:
//         "UI/UX and Web Development enthusiast. Passionate about the intersection of creativity and technology | like to bring designs to life with code. #Developer",
//       likes: "1",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {teamMembers.map((member) => (
//           <div
//             key={member.id}
//             className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
//           >
//             <div className="p-3 flex items-center justify-between border-b border-gray-100">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">
//                   {member.username.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-black">
//                     {member.username}
//                   </p>
//                   <p className="text-xs text-black">{member.role}</p>
//                 </div>
//               </div>
//               <button className="text-gray-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//                 </svg>
//               </button>
//             </div>

//             <div className="relative h-80 w-full">
//               <Image
//                 src={member.imageUrl}
//                 alt={member.fullName}
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

//             <div className="p-3">
//               <div className="flex justify-between mb-2">
//                 <div className="flex space-x-4">
//                   <button className="text-red-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                     </svg>
//                   </button>
//                   <button className="text-black">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                       />
//                     </svg>
//                   </button>
//                   <button className="text-black">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <button className="text-black">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <p className="text-sm font-medium mb-1 text-black">
//                 {member.likes} like
//               </p>

//               <div>
//                 <p className="text-sm text-black">
//                   <span className="font-bold text-black">
//                     {member.fullName}
//                   </span>{" "}
//                   {member.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCards;

// TeamGrid.jsx
// import Image from "next/image";

// const TeamCards = () => {
//   const teamCards = [
//     {
//       id: 1,
//       imageUrl: "/Photo Insta (2).png", // Full card image from your designer
//       alt: "Soumojit Sengupta profile card",
//     },
//     {
//       id: 2,
//       imageUrl: "/Photo Insta.png", // Full card image from your designer
//       alt: "Debajyoti Chatterjee profile card",
//     },
//     {
//       id: 3,
//       imageUrl: "/Photo Insta.svg", // Full card image from your designer
//       alt: "Shouryaman Samal profile card",
//     },
//     {
//       id: 4,
//       imageUrl: "/Photo Insta (1).png", // Full card image from your designer
//       alt: "Manisha Kumari profile card",
//     },
//   ];

//   return (
//     <div
//       className="max-w-screen mx-auto px-4 py-12 bg-cover bg-no-repeat bg-blend-soft-light bg-center"
//   style={{
//     backgroundImage: "url('/Frame 51 (3).png')",
//   }}
//     >
//       <h1 className="text-5xl font-bold text-center mb-12 font-satoshi text-black">
//         Our Team
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-40">
//         {teamCards.map((card) => (
//           <div key={card.id} className="w-full rounded-lg overflow-hidden ">
//             <div className="relative w-full aspect-[3/3.2]">
//               <Image
//                 src={card.imageUrl}
//                 alt={card.alt}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamCards;

// TeamGrid.jsx
import Image from "next/image";

const TeamCards = () => {
  const teamCards = [
    {
      id: 1,
      imageUrl: "/Photo Insta (2).svg", // Full card image from your designer
      alt: "Soumojit Sengupta profile card",
    },
    {
      id: 2,
      imageUrl: "/Photo Insta (1).svg", // Full card image from your designer
      alt: "Debajyoti Chatterjee profile card",
    },
    {
      id: 3,
      imageUrl: "/Photo Insta.svg", // Full card image from your designer
      alt: "Shouryaman Samal profile card",
    },
    {
      id: 4,
      imageUrl: "/Photo Insta (3).svg", // Full card image from your designer
      alt: "Manisha Kumari profile card",
    },
  ];

  return (
    <div
      className="max-w-screen mx-auto px-4 py-12 pt-0 bg-cover bg-no-repeat bg-blend-soft-light bg-center flex flex-col items-center"
      style={{
        backgroundImage: "url('/Frame 51 (3).png')",
      }}
    >
      <div className="flex flex-col max-w-6xl items-center justify-center">
        <h1 className="text-5xl font-bold text-center mb-16 text-black font-satoshi">
          Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {teamCards.map((card) => (
            <Image
              key={card.id}
              src={card.imageUrl}
              alt={card.alt}
              width={500}
              height={600}
              className=" h-auto w-auto cursor-pointer object-contain md:h-96 lg:h-[600.7px] transition-transform duration-300 transform hover:-translate-y-2 hover:translate-x-0.5 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
