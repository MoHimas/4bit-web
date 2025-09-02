import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
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
            Meet The{" "}
            <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
              Team
            </span>
          </>
        }
        desc="Creative professionals working together to bring bold ideas alive."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {teamData.map((team, index) => (
          <a
            key={index}
            href={team.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400 cursor-pointer"
            >
              <img
                src={team.image}
                className="w-24 h-24 rounded-full"
                alt={team.name}
              />
              <div className="text-center">
                <h3 className="font-bold text-sm">{team.name}</h3>
                <p className="text-xs opacity-80">- {team.title}</p>
                <p className="text-xs opacity-40">{team.edu}</p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
