import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Expert Social Media Marketing Services",
      desc: "Boost your online presence with our tailored social media marketing strategies, leveraging Instagram, Facebook, TikTok, and LinkedIn to drive engagement, conversions, and brand growth.",
      icon: assets.social_icon,
    },
    {
      title: "Professional Branding & Design Solutions",
      desc: "Elevate your brand identity with our bespoke design services, crafting unique visuals, logos, and graphics that captivate your audience and set your business apart.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Creation & Video Production",
      desc: "Transform your brand's narrative with our high-quality content writing and video production services, delivering impactful stories, engaging copy, and visually stunning videos.",
      icon: assets.content_icon,
    },
    {
      title: "Custom Website Design & Development",
      desc: "Unlock your business potential with our expert website design and development services, creating modern, responsive, and user-friendly websites that drive results.",
      icon: assets.marketing_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title={
          <>
            How can we{" "}
            <span className="bg-gradient-to-r from-[#F25000] to-[#ffa97b] bg-clip-text text-transparent">
              Help
            </span>
            ?
          </>
        }
        desc="We grow brands online with strategy, creativity, and measurable results."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
