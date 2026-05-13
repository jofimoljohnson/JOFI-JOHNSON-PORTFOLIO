// import React from "react";
// import contactImg from "../assets/contact.png";

// const Contact = ({ darkMode }) => {
//   return (
//     <section
//       id="contact"
//       style={{
//         backgroundColor: darkMode ? "#111827" : "#f9fafb",
//       }}
//       className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl font-bold
//             mb-2 sm:mb-3"
//             style={{
//               color: darkMode ? "white" : "#1f2937",
//             }}
//           >
//             Get In
//             <span
//               style={{
//                 background: "linear-gradient(to right, #f97316, #f59e0b)",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Touch
//             </span>
//           </h2>
//           <p
//             className="text-base sm:text-lg md:text-xl"
//             style={{
//               color: darkMode ? "#d1d5db" : "#6b7280",
//             }}
//           >
//             Let's discuss your project
//           </p>
//         </div>
//         <div
//           className="grid grid-cols-1 lg:grid-cols-2 gap-6
//            sm:gap-8 md:gap-10 items-center"
//         >
//           <div
//             className="flex justify-center order-2 lg:order-1"
//             data-aos="fade-right"
//           >
//             <img
//               src={contactImg}
//               alt="Contact"
//               className="w-full max-w-xs sm:max-w-sm lg:max-w-md
//                 h-auto object-contain"
//             />
//           </div>
//           {/* form */}
//           <form
//             style={{
//               background: darkMode
//                 ? "linear-gradient(to right, #1f2937, #111827)"
//                 : "linear-gradient(to right, #ffffff, #f9fafb)",
//               borderColor: darkMode ? "#374151" : "#e5e7eb",
//             }}
//             className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
//                shadow-lg order-1 lg:order-2"
//             data-aos="fade-left"
//           >
//             <div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-3
//                   sm:gap-4 mb-3 sm:mb-4"
//             >
//               {/* First Name */}
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 style={{
//                   background: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3
//                      rounded-lg text-sm sm:text-base
//                      focus:border-orange-500 focus:ring-2
//                      focus:ring-orange-500/20 transition-all"
//                 required
//               />
//               {/* Last Name */}
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3
//                      rounded-lg text-sm sm:text-base
//                      focus:border-orange-500 focus:ring-2
//                      focus:ring-orange-500/20 transition-all"
//                 required
//               />
//                </div>
//               {/* Email Address */}
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3
//                      rounded-lg text-sm sm:text-base
//                      focus:border-orange-500 focus:ring-2
//                      focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
//                 required
//               />

//               {/* Phone Number */}
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3
//                      rounded-lg text-sm sm:text-base
//                      focus:border-orange-500 focus:ring-2
//                      focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
//                 required
//               />
//               {/* Message */}
//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3
//                      rounded-lg text-sm sm:text-base
//                      focus:border-orange-500 focus:ring-2
//                      focus:ring-orange-500/20 transition-all mb-4 sm:mb-6
//                      resize-none"
//                 required
//               />
//               {/* Button */}
//               <button
//                 type="submit"
//                 style={{
//                   background: "linear-gradient(to right, #f97316, #f59e0b)",
//                 }}
//                 className="w-full py-2 sm:py-3 text-white
//                      font-semibold rounded-lg text-sm sm:text-base
//                      hover:shadow-lg hover:shadow-orange-500/25
//                      hover:scale-[1.02] transition-all"
//               >
//                 Send Message
//               </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import contactImg from "../assets/contacts.png";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  // SEND EMAIL FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rldszk3", // replace
        "template_aemeeky", // replace
        e.target,
        "mf0fy_J3SDkFFCnLa" // replace
      )
      .then(() => {
        alert("Message Sent Successfully!");

        // reset form
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss your project
          </p>
        </div>

        {/* GRID */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center"
        >
          {/* IMAGE */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              // className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain "
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
            />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                style={{
                  background: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                required
              />

              {/* Last Name */}
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                required
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4 outline-none"
              required
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4 outline-none"
              required
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? "#374151" : "#faede3",
                borderColor: darkMode ? "#4b5563" : "#d1d5db",
                color: darkMode ? "white" : "#1f2937",
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none outline-none"
              required
            />

            {/* BUTTON */}
            <button
              type="submit"
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
              }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
