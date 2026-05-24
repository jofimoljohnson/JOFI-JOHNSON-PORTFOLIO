





import  { useState } from "react";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwindcss.png";
import reduxtoolkit from "../assets/reduxtoolkit.png";
import materialui from "../assets/materialui.png";
import styledcomponents from "../assets/styledcomponents.png";
import reactQuery from '../assets/reactquery.webp'

const Skills = ({ darkMode }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "React JS",
      icon: react,
      level: 95,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Javascript",
      icon: javascript,
      level: 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Node JS",
      icon: nodejs,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Express JS",
      icon: expressjs,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "HTML",
      icon: html,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "CSS",
      icon: css,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Tailwind css",
      icon: tailwindcss,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Typescript",
      icon: typescript,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Next JS",
      icon: nextjs,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Redux Toolkit",
      icon: reduxtoolkit,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
     {
      name: "React Query",
      icon: reactQuery,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Material UI",
      icon: materialui,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "Styled Components",
      icon: styledcomponents,
      level: 95,
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">
        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Skills
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam corporis maxime veritatis. */}
          </p>
        </div>

        {/* Skills Cards */}
        <div
          className="flex flex-wrap -m-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => {
            const isActive = activeSkill === index;

            return (
              <div
                key={index}
                className="p-3 xl:w-1/4 lg:w-1/4 md:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onClick={() => setActiveSkill(index)}
                  onTouchStart={() => setActiveSkill(index)}
                  tabIndex={0}
                  style={{
                    background: darkMode
                      ? "linear-gradient(to bottom right, #1f2937, #111827)"
                      : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                    borderColor: isActive
                      ? "#f97316"
                      : darkMode
                      ? "#374151"
                      : "#e5e7eb",
                    boxShadow: isActive
                      ? "0 0 30px rgba(255,165,0,0.5)"
                      : "none",
                    transform: isActive ? "translateY(-8px)" : "translateY(0)",
                  }}
                  className="h-full p-6 rounded-2xl border
                  transition-all duration-300 cursor-pointer
                  outline-none"
                >
                  {/* Icon + Name */}
                  <div className="flex items-center mb-6">
                    <div
                      style={{
                        background: darkMode
                          ? "linear-gradient(to bottom right, #374151, #1f2937)"
                          : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                      className="w-16 h-16 rounded-xl p-3 flex
                      items-center justify-center
                      transition-transform duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3
                      className="text-xl font-bold ml-4"
                      style={{
                        color: darkMode ? "white" : "#1f2937",
                      }}
                    >
                      {skill.name}
                    </h3>
                  </div>

                
                  <div
                    className={`mt-6 pt-4 border-t ${
                      darkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                  >
                    <div
                      className="h-1 rounded-full opacity-70
                      transition-all duration-500"
                      style={{
                        width: isActive ? "100%" : "33.33%",
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;