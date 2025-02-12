import React, { useRef, useState } from "react";
import vinith from "/assets/vinithPhoto.jpeg";
import { FaCloudDownloadAlt } from "react-icons/fa";
import resume from "/assets/Resume.pdf";
import { CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LuProjector } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import Projects from "./Projects";
import Projects2 from "./Projects2";
import Projects3 from "./Projects3";
import Projects4 from "./Projects4";
import Projects5 from "./Projects5";
import Education from "./Education";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after clicking a section in mobile
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 w-full flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <img src={vinith} alt="Vinith" className="w-12 h-12 rounded-full shadow-md" />
          <span className="text-lg font-bold text-gray-800">Hai There 🖐</span>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu size={28} className="cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(skillRef)}>Skills</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(educationRef)}>Education</li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          Contact me
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-md p-6 w-full text-gray-700 font-medium absolute top-16 left-0 ">
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>About</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(skillRef)}>Skills</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li className="hover:text-blue-500 cursor-pointer" onClick={() => scrollToSection(educationRef)}>Education</li>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact me
          </button>
        </ul>
      )}

      {/* Main Content */}
      <header className="group flex flex-col items-center justify-center border-none rounded-2xl w-full md:w-3/4 lg:w-4xl mt-10 md:mt-20 min-h-[60vh] md:min-h-[80vh] shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Gnanavinith G
        </h1>
        <p className="md:text-lg text-black text-center font-medium px-2 md:px-0 transition duration-300 hover:text-blue-600 hover:drop-shadow-[0_0_50px_#00f] hover:rotate-z-1">
          MERN Full Stack Developer | UI UX Designer | Web3 Enthusiast
        </p>

        <div className="mt-5 flex items-center">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black px-7 py-2 flex gap-2 items-center rounded shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300"
          >
            Resume <FaCloudDownloadAlt />
          </a>
        </div>

        {/* Social Icons Section */}
        <div className="mt-20 flex space-x-6 text-2xl text-gray-600 hover:text-gray-800">
          <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
            <a
              href="mailto:vinithvini775@gmail.com?subject=Hello&body=I would like to discuss something."
              className="hover:text-blue-500 cursor-pointer"
            >
              <CiMail />
            </a>
          </button>

          <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
            <a
              href="https://www.instagram.com/vini___th/  "
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram className="hover:text-pink-500 cursor-pointer" />
            </a>
          </button>

          <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
            <a
              href="https://www.linkedin.com/in/gnanavinith-g/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </a>
          </button>

          <button className="border-none p-2 rounded-e-sm shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300">
            <a
              href="https://www.facebook.com/vinith.vini.547389"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            </a>
          </button>
        </div>
      </header>

      {/* About Section */}

      <div
        ref={aboutRef}
        className="w-full md:w-3/4 rounded-2xl lg:w-4xl mt-20 md:mt-20 min-h-[60vh] md:min-h-[80vh] shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 p-6 md:p-12"
      >
        <div ref={contactRef}>
          <h1 className="text-2xl font-semibold mb-4 text-center">
            About Me 😀
          </h1>
          <p>Hello! I am Gnanavinith, MERN Full Stack Developer.</p>

          <p className="mt-2">
            I have hands-on experience working with the MERN stack, utilizing
            MongoDB for database management, Express.js to create robust
            server-side applications, React for building dynamic user
            interfaces, and Node.js to develop scalable backend services. I am
            proficient in integrating these technologies to build full-stack web
            applications. My focus has been on creating responsive, efficient,
            and user-friendly solutions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Basic Information</h2>
          <div className="space-y-2">
            <p className="flex">
              <strong className="w-32">Name:</strong>Gnanavinith G
            </p>
            <p className="flex">
              <strong className="w-32">Age:</strong> 23
            </p>
            <p className="flex">
              <strong className="w-32">Contact:</strong>
              <a
                href="tel:9585458794"
                className="text-blue-600 hover:underline"
              >
                +91 9585458794
              </a>
            </p>
            <p className="flex">
              <strong className="w-32">Email:</strong>{" "}
              <a
                href="mailto:vinithvini775@gmail.com"
                className="text-blue-600"
              >
                vinithvini775@gmail.com
              </a>
            </p>
            <p className="flex">
              <strong className="w-32">Languages:</strong> English, Tamil
            </p>
            <p className="flex">
              <strong className="w-32">Location:</strong>Coimbatore, Tamil
              Nadu
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div
        ref={skillRef}
        className="w-full md:w-3/4 rounded-2xl lg:w-4xl mt-20 md:mt-20 min-h-[60vh] md:min-h-[80vh] shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 p-6 md:p-12"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Skills</h1>

        <div className="space-y-4">
          <div>
            <p className="flex justify-between">
              <strong>HTML/CSS:</strong> <p>100%</p>
            </p>
            <progress value="100" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>Bootstrap:</strong> <p>95%</p>
            </p>
            <progress value="100" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>Tailwind:</strong> <p>95%</p>
            </p>
            <progress value="100" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>JAVASCRIPT:</strong> <p>85%</p>
            </p>
            <progress value="85" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>REACT JS:</strong> <p>80%</p>
            </p>
            <progress value="80" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>NODE JS:</strong> <p>75%</p>
            </p>
            <progress value="75" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>EXPRESS JS:</strong> <p>70%</p>
            </p>
            <progress value="70" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>MONGODB:</strong> <p>80%</p>
            </p>
            <progress value="80" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>GITHUB:</strong> <p>85%</p>
            </p>
            <progress value="85" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>MOBILE RESPONSIVE:</strong> <p>90%</p>
            </p>
            <progress value="90" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>UI UX:</strong> <p>70%</p>
            </p>
            <progress value="70" max="100" className="w-full"></progress>
          </div>

          <div>
            <p className="flex justify-between">
              <strong>CANVA/FIGMA:</strong> <p>65%</p>
            </p>
            <progress value="65" max="100" className="w-full"></progress>
          </div>
        </div>
      </div>

      <button
        ref={projectRef}
        className="text-2xl flex gap-5 items-center font-semibold mt-20 py-4 px-4 rounded-2xl text-center shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300"
      >
        Projects <LuProjector />
      </button>
      <Projects />

      <Projects2 />

      <Projects3 />

      <Projects4 />
      
      <Projects5/>

      <button
        ref={educationRef}
        className="text-2xl flex gap-5 items-center font-semibold mt-20 py-4 px-4 rounded-2xl text-center shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300"
      >
        Education And Course Training
        <FaLaptopCode />
      </button>

      <Education />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9585458794"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center text-2xl animate-pulse"
      >
        <FaWhatsapp />
      </a>

      <div className="mt-20 text-center text-gray-600 text-sm">
        <p>© Gnanavinith 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
