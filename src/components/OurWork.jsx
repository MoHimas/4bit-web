import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Marketing for FIKRAWELI",
      desc: "social media marketing for fikraweli - instagram, tiktok and facebook",
      image: assets.work_mobile_app,
    },
    {
      title: "Marketing for TechBound",
      desc: "social media marketing for TechBound - instagram, tiktok and facebook",
      image: assets.work_dashboard_management,
    },
    {
      title: "Video Production for Shelby Trading",
      desc: "high qulity video production and editing for Shelby Trading",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="ourwork"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="Recent projects demonstrating strategy, creativity, and proven marketing results."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="hover:scale-102 duration-500 transtion-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
