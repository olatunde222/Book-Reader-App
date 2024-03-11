"use client";

import { motion } from "framer-motion";
import  Link  from "next/link";
const Header = () => {
  return (
    <header style={headerSytle}>
      <motion.div
        style={leftContainerStyle}
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 style={bookTitleStyle}>
          Book App
          <motion.input
            style={searchInputStyle}
            type="text"
            placeholder="Tell me what you like to read and we will get that..."
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </h1>
      </motion.div>
      <motion.div
        style={rightContainerStyle}
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile" style={avatarLinkStyle}>
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDRH33AMcswAh5A9UBSQeRLICCcffZz5r0F0tpQpidGlSrQjQ4yiJa9Z1Xt3IbnYojEE&usqp=CAU"
            alt="avatarImage"
            style={avatarStyle}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

const headerSytle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1rem 1rem 0",
  color: "#fff",
};

const leftContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const bookTitleStyle = {
  marginRight: "2rem",
  color: "#000",
};

const searchInputStyle = {
  padding: "0.7rem 1rem",
  marginLeft: "3.6rem",
  borderRadius: "70px",
  backgroundColor: "rgb(248,231,221)",
  border: "2px solid #000",
  minWidth: "320px",
  
};

const rightContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const avatarLinkStyle = {
  marginRight: "1rem",
};

const avatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
};
