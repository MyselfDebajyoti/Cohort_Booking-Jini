// // pages/index.js
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-200 to-purple-300 z-0"></div>

//       <Head>
//         <title>BookingJini - Make Your Hotel Shine on Social Media</title>
//         <meta
//           name="description"
//           content="From Idea to Post—Let AI Handle Your Social Media!"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="relative z-10 min-h-screen flex flex-col">
//         {/* Navbar */}
//         <nav className="w-full px-4 md:px-8 py-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <Image
//               src="/bookingjini-logo.png"
//               alt="BookingJini"
//               width={150}
//               height={40}
//               className="h-10 w-auto"
//             />
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-black hover:text-blue-700">
//               Home
//             </Link>
//             <Link href="/" className="text-black hover:text-blue-700">
//               Home
//             </Link>
//             <Link href="/" className="text-black hover:text-blue-700">
//               Home
//             </Link>
//             <Link href="/" className="text-black hover:text-blue-700">
//               Home
//             </Link>
//           </div>

//           <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md">
//             Login
//           </button>
//         </nav>

//         {/* Main Content */}
//         <div className="flex-grow flex flex-col justify-center items-center px-4 text-center">
//           {/* Social Media Tag */}
//           <div className="mb-8">
//             <div className="bg-white rounded-full py-2 px-6 inline-block">
//               <p className="text-black font-medium"># socialmedia</p>
//             </div>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black max-w-4xl mb-4">
//             Make Your Hotel Shine on Social Media
//           </h1>

//           {/* Subheading */}
//           <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mb-12">
//             From Idea to Post—Let AI Handle Your Social Media!
//           </p>

//           {/* CTA Button */}
//           <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md flex items-center">
//             Start generating
//             <span className="ml-2 bg-white w-6 h-6 rounded-md flex items-center justify-center">
//               <span className="text-blue-700 font-bold text-lg">+</span>
//             </span>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// pages/index.js

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TypewriterSequence from "@/components/Typewriter";
import { auth } from "@/app/_lib/auth";
import { getServerSession } from "next-auth";

import Navbar from "@/components/Navbar";

// app/layout.js or a component where you want to use the font
import localFont from "next/font/local";

// Define the font
const customFont = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom", // CSS variable name
});

export default async function Hero() {
  // const session = await auth();
  // const { data: session, status } = useSession();
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const session = await getServerSession(auth);
  // const loggedIn = false;

  // if (session?.user) {
  //   const loggedIn = session?.user?.image;
  //   const email = session.user.email;
  //   const img = session.user.image;
  //   const name = session.user.name;
  // }

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Frame 41.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <Head>
        <title>BookingJini - Make Your Hotel Shine on Social Media</title>
        <meta
          name="description"
          content="From Idea to Post—Let AI Handle Your Social Media!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Navbar */}

        {session?.user?.image ? (
          <Navbar
            img={session.user.image}
            email={session.user.email}
            loggedIn={session?.user?.image}
            name={session.user.name}
          ></Navbar>
        ) : (
          <nav className="w-full px-4 md:px-8 pt-2  flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/image 2.png"
                alt="BookingJini"
                width={150}
                height={0}
                className="h-18 w-auto cursor-pointer"
              />
            </div>
            {/* <div className="md:flex-grow"></div> */}

            <div className="hidden md:flex space-x-24 pr-25">
              <Link
                href="/"
                className="text-black font-semibold hover:text-blue-700"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-black font-semibold hover:text-blue-700"
              >
                Explore
              </Link>
              <Link
                href="/"
                className="text-black font-semibold hover:text-blue-700"
              >
                How It Works
              </Link>
              <Link
                href="/"
                className="text-black font-semibold hover:text-blue-700"
              >
                Our team
              </Link>
            </div>

            <Link
              href="/login"
              className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white  py-2 px-6 rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
            >
              Login
            </Link>

            {/* <Link
            href="/login"
            className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white  py-2 px-6 rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
          >
            Login
          </Link> */}
          </nav>
        )}

        {/* <Link
            href="/login"
            className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF] font-semibold  text-white  py-2 px-6 rounded-md font-space-grotesk font-grotesk transition-transform duration-300 transform hover:-translate-y-1 hover:translate-x-0.5"
          >
            Login
          </Link> */}

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 text-center">
          {/* Social Media Tag */}
          <div className="mb-8">
            <div className="bg-white rounded-lg py-2 px-6 inline-block">
              <TypewriterSequence></TypewriterSequence>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-black max-w-4xl mb-4 font-satoshi tracking-tighter `}
          >
            Make Your Hotel<br></br> Shine on Social Media
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[#424345] max-w-3xl mb-12 font-black">
            From Idea to Post—Let AI Handle Your Social Media!
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#001ECC]  to-[#5900FF]  hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg flex items-center transition-transform duration-300 transform hover:-translate-y-2 hover:translate-x-1">
            Start generating✨
            {/* <span className="ml-2 bg-white w-6 h-6 rounded-md flex items-center justify-center">
              <span className=" font-bold text-lg bg-blue-700 hover:bg-blue-800">
                ✨
              </span>
            </span> */}
          </button>
        </div>
      </main>
    </div>
  );
}
