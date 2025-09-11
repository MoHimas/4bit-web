import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Social Media Marketing for Fikraweli",
      desc: "Comprehensive social media marketing strategy for Fikraweli across Instagram, TikTok, and Facebook to increase brand visibility and engagement.",
      image: assets.fikraweli,
      link: "https://www.instagram.com/fikraweli?igsh=MXJrN3dkd3MwaXd5Zw==", // 🔗 Add link here
    },
    {
      title: "Video Production for Techbond",
      desc: "High-quality video production and professional editing for Techbond, delivering engaging visual content optimized for digital platforms.",
      image: assets.TechBound,
      link: "https://www.instagram.com/reel/DLPHsNUqL18/?igsh=cjZxcHV5djRrbWJ5",
    },
    {
      title: "Marketing Campaign for Mizanza 2025",
      desc: "Creative digital marketing campaign for Mizanza 2025, including branding, social media promotions, and audience engagement strategies to maximize event reach.",
      image: assets.humaisarian,
      link: "https://www.instagram.com/p/DF27YGnoDvi/?igsh=MWN4ZDZsc2V1YmV3cA==",
    },
    {
      title: "Election Campaign 2025",
      desc: "Strategically designed election campaign for 2025, featuring impactful video production, professional editing, and creative visuals to boost engagement and voter outreach.",
      image: assets.vote,
      link: "https://www.instagram.com/npp.beruwala?igsh=bjZidDV5d2RldGVn",
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
        title={
          <>
            Our Latest{" "}
            <span className="bg-gradient-to-r from-[#F25000] to-[#ffa97b] bg-clip-text text-transparent">
              Work
            </span>
          </>
        }
        desc="Recent projects demonstrating strategy, creativity, and proven marketing results."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank" // open in new tab (remove if you want same tab)
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="hover:scale-102 duration-500 transition-all cursor-pointer"
            >
              <img
                src={work.image}
                className="w-full rounded-xl"
                alt={work.title}
              />
              <h3 className="mt-3 mb-2 text-lg text-center font-semibold">
                {work.title}
              </h3>
              <p className="text-sm text-center opacity-60 w-5/6">
                {work.desc}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
