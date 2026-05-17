"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories, skills } from "@/lib/data";
import { Cpu, Palette, Code, Shield, Database, Settings } from "lucide-react";

const categoryIcons = {
  "AI/ML": <Cpu className="h-5 w-5" />,
  "Programming": <Code className="h-5 w-5" />,
  "Web Development": <Palette className="h-5 w-5" />,
  "Cyber Security": <Shield className="h-5 w-5" />,
  "Databases": <Database className="h-5 w-5" />,
  "Tools": <Settings className="h-5 w-5" />,
};

const categoryDescriptions = {
  "AI/ML":
    "Building intelligent systems with machine learning, deep learning, and generative AI",
  "Programming":
    "Strong foundation in multiple programming languages and software development",
  "Web Development":
    "Creating modern, responsive web applications with cutting-edge frameworks",
  "Cyber Security":
    "Knowledge of network security, protocols, and cybersecurity best practices",
  "Databases":
    "Experience with relational and NoSQL databases for efficient data management",
  "Tools":
    "Proficient with development tools, version control, and productivity software",
};

interface SkillBarProps {
  skill: (typeof skills)[0];
  color: string;
  delay: number;
}

function SkillBar({ skill, color, delay }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
        <span className="text-xs text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8 }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-rotate" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-pink-400 bg-pink-500/10 rounded-full border border-pink-500/20 mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and proficiency levels
          </p>
        </motion.div>

        <Tabs defaultValue="AI/ML" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-secondary/50 h-auto p-2 mb-12 max-w-4xl mx-auto">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category, categoryIndex) => (
            <TabsContent key={category.name} value={category.name} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-8 glow-effect">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        {categoryIcons[category.name as keyof typeof categoryIcons]}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                        <p className="text-gray-400">
                          {categoryDescriptions[category.name as keyof typeof categoryDescriptions]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map(
                          (skill, index) => (
                            <SkillBar
                              key={skill.name}
                              skill={skill}
                              color={category.color}
                              delay={index * 0.1}
                            />
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.skills.slice(Math.ceil(category.skills.length / 2)).map(
                          (skill, index) => (
                            <SkillBar
                              key={skill.name}
                              skill={skill}
                              color={category.color}
                              delay={index * 0.1}
                            />
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="glass inline-block px-8 py-6">
            <CardContent className="p-0">
              <p className="text-gray-300 mb-4">
                Continuously learning and expanding my skill set to stay at the
                forefront of technology
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Always Learning", "Problem Solver", "Team Player", "Detail Oriented"].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 text-sm font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}