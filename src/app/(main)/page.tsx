"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import CategoryPill from "@/components/CategoryPill";
import { Project } from "@/types";

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [animatedWords, setAnimatedWords] = useState<string[]>([]);
  const [showH3, setShowH3] = useState(false);

  const words = useMemo(() => ["Obsessed", "with", "impact"], []);

  useEffect(() => {
    // Animate words one by one
    let currentIndex = 0;
    const animateWords = () => {
      if (currentIndex < words.length) {
        setAnimatedWords(words.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(animateWords, 200);
      } else {
        setTimeout(() => setShowH3(true), 200);
      }
    };
    setTimeout(animateWords, 150);
  }, [words]);

  useEffect(() => {
    async function fetchProjects() {
      setProjects([
        {
          id: 2,
          created_at: "2024-01-02T00:00:00Z",
          title: "AI Roleplay",
          slug: "ai-roleplay",
          description: "Revolutionizing Learning Through AI-Powered Roleplay Experiences",
          content: "Project content here",
          categories: ["AI/ML", "Product Design", "UX Research"],
          thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
        },
        {
          id: 5,
          created_at: "2024-01-05T00:00:00Z",
          title: "Udemy Business",
          slug: "udemy-business",
          description: "How User-Centered Design Scaled a B2B Learning Platform from $5M to $500M",
          content: "Project content here",
          categories: ["B2B Design", "Product Design", "UX Research", "Leadership", "Growth"],
          thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
        },
        {
          id: 1,
          created_at: "2024-01-01T00:00:00Z",
          title: "Cotopaxi",
          slug: "project-alpha",
          description: "Marketing Mix Modeling Unlocks 20%+ New Business Growth",
          content: "Project content here",
          categories: ["Leadership", "Strategy"],
          thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
        },
        {
          id: 3,
          created_at: "2024-01-03T00:00:00Z",
          title: "Project Gamma",
          slug: "project-gamma",
          description: "Customer experience optimization",
          content: "Project content here",
          categories: ["UX", "Analytics"],
          thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
        },
        {
          id: 4,
          created_at: "2024-01-04T00:00:00Z",
          title: "Project Delta",
          slug: "project-delta",
          description: "Market expansion strategy",
          content: "Project content here",
          categories: ["Growth", "Marketing"],
          thumbnail_url: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
        }
      ]);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      {/* Hero Section */}
      <section className="min-h-screen bg-[#009688] flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16 w-full">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#FAF2E8] uppercase tracking-tight leading-none mb-4 sm:mb-6">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ 
                    rotateX: -90,
                    opacity: 0,
                    transformOrigin: "50% 50% -50px"
                  }}
                  animate={{ 
                    rotateX: animatedWords.includes(word) ? 0 : -90,
                    opacity: animatedWords.includes(word) ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, // 0.3s duration (was 0.6s)
                    ease: "easeOut",
                    delay: index * 0.2 // 0.2s delay (was 0.4s)
                  }}
                  className="inline-block mr-4 relative"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <span
                    className="relative"
                    style={{
                      display: "inline-block",
                      transform: "translateZ(0)"
                    }}
                  >
                    {word}
                  </span>
                </motion.span>
              ))}
            </h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showH3 ? 1 : 0, y: showH3 ? 0 : 20 }}
              transition={{ 
                duration: 0.4, // 0.4s duration (was 0.8s)
                ease: "easeOut"
              }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#FAF2E8]/90 leading-tight"
            >
              Welcome to Darragh&apos;s portfolio
            </motion.h3>
          </div>

          {/* Stacked Images */}
          <div className="w-full lg:w-2/5 h-[80vh] lg:h-[80vh] relative">
            {/* Back layer (4th image) */}
            <div className="absolute inset-0 translate-x-2 translate-y-[-1px] rotate-3 opacity-15">
              <Image
                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                alt="Leadership"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Third layer */}
            <div className="absolute inset-0 -translate-x-1.5 translate-y-2 -rotate-2.5 opacity-25">
              <Image
                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                alt="Leadership"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Second layer */}
            <div className="absolute inset-0 translate-x-1 translate-y-[-0.75px] rotate-1.5 opacity-40">
              <Image
                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                alt="Leadership"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Front layer (main image) */}
            <div className="absolute inset-0 -translate-x-0.5 translate-y-0.5 -rotate-0.75 opacity-100">
              <Image
                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                alt="Leadership"
                width={600}
                height={800}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-4 sm:mb-6 lg:mb-8 leading-tight text-center">
              My Work
            </h3>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] font-medium text-[#242424]/80 mb-12 sm:mb-16 lg:mb-20 leading-tight text-center max-w-4xl mx-auto"
            >
              As a product design director I&apos;ve created, iterated, destroyed and redesigned. Products, teams and processes
            </motion.h2>
          </div>
          
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center py-20"
            >
              <div className="text-gray-600 text-lg">Loading projects...</div>
            </motion.div>
          ) : (
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full min-h-screen flex items-center bg-[#FAF2E8]"
                >
                  <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                      {/* Image Section - Centered in first 50% */}
                      <div className="flex items-center justify-center lg:justify-end pr-8 lg:pr-16">
                        <div className="w-full lg:w-4/5 h-[80vh] relative">
                          {project.slug === "ai-roleplay" ? (
                            // Video for AI Roleplay project
                            <video
                              src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//role_play_marketing_1.webm"
                              loop
                              autoPlay
                              muted
                              className="w-full h-full object-cover rounded-lg"
                              poster=""
                              preload="metadata"
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            // Stacked images for other projects
                            <>
                              {/* Back layer (4th image) */}
                              <div className="absolute inset-0 translate-x-2 translate-y-[-1px] rotate-3 opacity-15">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                                  alt="Leadership"
                                  width={600}
                                  height={800}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                              
                              {/* Third layer */}
                              <div className="absolute inset-0 -translate-x-1.5 translate-y-2 -rotate-2.5 opacity-25">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                                  alt="Leadership"
                                  width={600}
                                  height={800}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                              
                              {/* Second layer */}
                              <div className="absolute inset-0 translate-x-1 translate-y-[-0.75px] rotate-1.5 opacity-40">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                                  alt="Leadership"
                                  width={600}
                                  height={800}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                              
                              {/* Front layer (main image) */}
                              <div className="absolute inset-0 -translate-x-0.5 translate-y-0.5 -rotate-0.75 opacity-100">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Figure.png"
                                  alt="Leadership"
                                  width={600}
                                  height={800}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Content Section - Second 50% */}
                      <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#242424] mb-4 leading-tight">
                            {project.title}
                          </h3>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.3rem] xl:text-[1.5rem] text-[#242424]/70 mb-6 leading-relaxed">
                            {project.description || "Project description coming soon..."}
                          </p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          viewport={{ once: true }}
                          className="flex flex-wrap gap-2 mb-8"
                        >
                          {(project.categories || []).map((category, catIndex) => (
                            <CategoryPill key={catIndex} category={category} />
                          ))}
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.0 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center px-8 py-4 bg-[#009688] text-[#FAF2E8] font-semibold rounded-lg hover:bg-[#00796B] transition-colors duration-300"
                          >
                            View Project
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Personal Recommendations Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#4D6B99]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#FAF2E8] mb-4 sm:mb-6 lg:mb-8 leading-tight text-center">
            Personal Recommendations
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[1.5rem] xl:text-[1.8rem] font-medium text-[#FAF2E8]/80 mb-8 sm:mb-12 lg:mb-16 leading-tight text-center">
            Here&apos;s some nice words from my previous colleagues and team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl sm:text-9xl lg:text-[8rem] xl:text-[10rem] font-bold text-[#FAF2E8]/20 absolute -top-4 -left-2">&quot;</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#FAF2E8] leading-relaxed mb-6 relative z-10">
                Darragh is an exceptional product design director who consistently delivers innovative solutions. His strategic thinking and attention to detail have been invaluable to our team.
              </blockquote>
              <cite className="text-lg sm:text-xl font-semibold text-[#FAF2E8]/80 block">— Sarah Johnson, Senior Product Manager</cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl sm:text-9xl lg:text-[8rem] xl:text-[10rem] font-bold text-[#FAF2E8]/20 absolute -top-4 -left-2">&quot;</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#FAF2E8] leading-relaxed mb-6 relative z-10">
                Working with Darragh was a game-changer for our design process. He has an incredible ability to balance user needs with business objectives.
              </blockquote>
              <cite className="text-lg sm:text-xl font-semibold text-[#FAF2E8]/80 block">— Michael Chen, UX Lead</cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl sm:text-9xl lg:text-[8rem] xl:text-[10rem] font-bold text-[#FAF2E8]/20 absolute -top-4 -left-2">&quot;</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#FAF2E8] leading-relaxed mb-6 relative z-10">
                Darragh&apos;s leadership style is both inspiring and effective. He knows how to bring out the best in his team while delivering exceptional results.
              </blockquote>
              <cite className="text-lg sm:text-xl font-semibold text-[#FAF2E8]/80 block">— Emma Rodriguez, Design Director</cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-8xl sm:text-9xl lg:text-[8rem] xl:text-[10rem] font-bold text-[#FAF2E8]/20 absolute -top-4 -left-2">&quot;</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#FAF2E8] leading-relaxed mb-6 relative z-10">
                Darragh&apos;s strategic vision and execution skills are unmatched. He transformed our product design approach and significantly improved our user experience.
              </blockquote>
              <cite className="text-lg sm:text-xl font-semibold text-[#FAF2E8]/80 block">— David Thompson, VP of Product</cite>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              href="https://linkedin.com/in/darraghflood" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-[#FAF2E8] text-[#242424] font-semibold text-lg sm:text-xl rounded-lg hover:bg-[#FAF2E8]/90 transition-colors duration-200"
            >
              Read More on LinkedIn
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 