import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import profile from "../assets/profile.jpg"; // Import the profile image

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        {/* Purple Bar */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Profile Picture + Text Section */}
        <div className="flex flex-row items-center gap-6">
          {/* Profile Image */}
          <img
            src={profile}
            alt="Kenrich Coutinho"
            className="w-20 h-20 rounded-full shadow-lg"
          />

          {/* Text Content */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="text-electric-purple">{personalInfo.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              Innovative {personalInfo.role}, <br className="sm:block hidden" />
              building web and mobile applications
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll Down Animation */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
