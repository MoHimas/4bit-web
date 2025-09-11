import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.bitlogo_dark : assets.bitlogo}
            className="w-15 sm:w-22"
            alt=""
          />
          <p className="max-w-md">
            We grow brands online with strategy, creativity, and measurable
            results.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#ourwork">
                Our Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Reach Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            the latest news sent to your inbox monthly.
          </p>
          <div className="flex text-sm gap-2">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bootom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <a
          href="https://share.google/BoHMiNYnpD5mFaSPE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Copyright 2025 © 4Bit Pvt Ltd - All Right Reserved.</p>
        </a>
        <div className="flex items-center justify-between gap-4 cursor-pointer">
          <a
            href="https://wa.me/message/7PTWL66TFJPNI1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.whatsapp}
              alt="WhatsApp"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574719767785&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.facebook_icon} alt="" />
          </a>

          <a
            href="https://www.tiktok.com/@4bitculture?_t=ZS-8zOdT90cyNF&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.tiktok}
              alt="Tiktok"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/4bitculture?igsh=MXJrYXAyeTNmcDR1Nw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/4bit-culture/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
