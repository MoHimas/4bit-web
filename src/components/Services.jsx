import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Social Media Marketing",
      desc: "we create engaging campaigns across Instagram, Facebook, TikTok, and LinkedIn to boost visibility and drive results.",
      icon: assets.social_icon,
    },
    {
      title: "Branding & Designing",
      desc: "we craft unique brand identities, visuals, and designs that make your business stand out with a professional presence.",
      icon: assets.ads_icon,
    },
    {
      title: "Content Writing & Video Production",
      desc: "we deliver impactful content, from compelling copy to high-quality videos, designed to tell your story effectively.",
      icon: assets.content_icon,
    },
    {
      title: "Website Design & Development",
      desc: "we build modern, user-friendly websites tailored to your business, ensuring performance, responsiveness, and style.",
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
        title="How can we help?"
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
