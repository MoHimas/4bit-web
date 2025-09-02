import React from "react";
import Title from "./Title";
import { testimonialData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={
          <>
            Customer{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Testimonials
            </span>
          </>
        }
        desc="Our customers love what we do! Here’s what they have to say about their experience with us."
      />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {testimonialData.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex max-sm: flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <div className="flex-1">
              <h3 className="font-bold text-s">{testimonial.name}</h3>
              <p className="text-s opacity-80">- {testimonial.title}</p>
              <p className="text-s opacity-40">{testimonial.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
