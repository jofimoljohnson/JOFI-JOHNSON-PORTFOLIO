import React from "react";
import about from "../assets/about.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex
      items-center justify-center px-4 sm:px-6
     `}
    >
      <div
        className="max-w-6xl w-full grid grid-cols-1
        lg:grid-cols-2 gap-8 sm:gap-12 items-center"
      >
        {/* Image Section */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative
          order-2 lg:order-1"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]">
            {/* Star Shape Background */}
            <div
              className="absolute -inset-8 lg:-inset-12
              bg-gradient-to-r from-[#f97316]
              via-[#fb923c] to-[#f59e0b]
              rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            {/* Image */}
            <img
              src={about}
              alt="About"
              // className="absolute inset-0 w-full h-full
              // object-cover rounded-2xl z-10
              // transition-all duration-300"
              className="absolute inset-0 w-full h-full
object-cover rounded-full z-10
border-4 border-orange-400
transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        {/* Content Section */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left
          relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl
              xl:text-6xl font-bold mb-4 sm:mb-6
              text-transparent bg-gradient-to-r
              from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg
            xl:text-xl mb-6 sm:mb-8 leading-relaxed
            bg-gradient-to-r from-orange-900/10
            to-orange-900/5 p-4 sm:p-6
            rounded-xl sm:rounded-2xl
            backdrop-blur-sm
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hi, I’m Jofimol Johnson, a MERN Stack Developer from Kerala. I have
            hands-on experience in building responsive and scalable web
            applications using React.js, Node.js, Express.js, MongoDB, Redux
            Toolkit, and REST APIs. I enjoy creating clean, modern, and
            user-friendly interfaces while also working on backend
            functionality. I have worked on projects like an E-Commerce App, AI
            Resume Builder, and YouTube Clone, which helped me improve my skills
            in full-stack development, API integration, authentication, and
            responsive design. I am focused on writing clean code, improving
            performance, and continuously learning new technologies to build
            better web applications.
          </p>

          {/* Stats */}
          <div
            className="flex flex-wrap justify-center
            lg:justify-start gap-4 sm:gap-6
            lg:gap-8 mb-6 sm:mb-8"
          >
            {/* Certifications */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className="text-2xl sm:text-3xl
                lg:text-4xl font-bold text-orange-400"
              >
                5+
              </div>

              <div
                className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Certifications
              </div>
            </div>

            {/* Experience */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div
                className="text-2xl sm:text-3xl
                lg:text-4xl font-bold text-orange-400"
              >
                1+
              </div>

              <div
                className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Years Experience
              </div>
            </div>

            {/* Projects */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div
                className="text-2xl sm:text-3xl
                lg:text-4xl font-bold text-orange-400"
              >
                10+
              </div>

              <div
                className={`text-xs sm:text-sm lg:text-base
                ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Projects Completed
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            className="w-full sm:w-auto border-2
            border-orange-500 inline-flex items-center
            justify-center py-2 px-4 sm:px-6
            hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
            rounded-full text-base sm:text-lg
            font-semibold transition-all duration-300
            transform hover:scale-105"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
