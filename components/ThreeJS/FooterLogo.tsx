import { motion } from "framer-motion";
import React from "react";

const FooterLogo = () => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex items-center justify-center">
        <img
          src="profile.jpeg"
          className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer transition-all duration-100"
        />
      </motion.div>
    </footer>
  );
}

export default FooterLogo;
