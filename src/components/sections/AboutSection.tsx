"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Zap } from "lucide-react";
import { personalInfo, summary, education, skillCategories } from "@/lib/data";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden">
      <motion.div style={{ opacity, scale }}>
        <div className="container px-4 mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-block px-4 py-2 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-4">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Who I Am</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A passionate engineer bridging the gap between AI innovation and practical
                applications
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <Card className="glow-effect">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-gray-300 leading-relaxed">{summary}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Education Journey
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <Card className="relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                      <div
                        className="absolute top-0 left-0 w-1 h-full"
                        style={{ backgroundColor: index === 0 ? "#8b5cf6" : "#6366f1" }}
                      />
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="p-3 rounded-lg"
                              style={{
                                backgroundColor: index === 0 ? "#8b5cf6" : "#6366f1",
                              }}
                            >
                              {index === 0 ? (
                                <GraduationCap className="h-6 w-6 text-white" />
                              ) : (
                                <Award className="h-6 w-6 text-white" />
                              )}
                            </div>
                            <div>
                              <h4 className="text-xl font-semibold">{edu.degree}</h4>
                              <p className="text-gray-400">{edu.institution}</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 bg-secondary px-4 py-2 rounded-full">
                            {edu.duration}
                          </span>
                        </div>
                        {edu.gpa && (
                          <p className="text-sm text-green-400 font-medium mb-3">
                            GPA: {edu.gpa}
                          </p>
                        )}
                        {edu.achievements && (
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                <Zap className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Expertise Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card
                      className="h-full border-t-4 transition-all duration-300 group"
                      style={{ borderTopColor: category.color }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${category.color}20` }}
                          >
                            <Code className="h-5 w-5" style={{ color: category.color }} />
                          </div>
                          <h4 className="text-lg font-semibold">{category.name}</h4>
                        </div>
                        <div className="space-y-3">
                          {category.skills.slice(0, 4).map((skill) => (
                            <div key={skill.name}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-300">{skill.name}</span>
                                <span className="text-gray-500">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: category.color }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}