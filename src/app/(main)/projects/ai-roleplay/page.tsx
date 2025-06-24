"use client";

import Image from "next/image";
import CategoryPill from "@/components/CategoryPill";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AIRoleplayProjectPage() {
  const projectData = {
    title: "AI Roleplay",
    categories: ["AI/ML", "Product Design", "UX Research", "Leadership"],
    heroVideo: "https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//role_play_marketing_1.webm",
    subtitle: "Roleplay feature design perfectly meets market needs. Hits 12 month target in 3 weeks ",
    description: "At Udemy, I led product design for an ambitious initiative: to transform how learners practice and build communication, management, and sales skills. The goal? Deliver a deeply immersive, AI-powered roleplay experience that would simulate real-world conversations, provide instant feedback, and help users grow in confidence and capability.",
    content: [
      {
        title: "The Problem",
        text: "Despite having millions of learners and an extensive course library, Udemy lacked a way for users to practice what they were learning—particularly in soft-skill domains like leadership, sales, and interviewing. This limited our product-market fit for many enterprise and individual customers. In fact, some were turning to competitors who offered more interactive, applied learning experiences."
      },
      {
        title: "Our Solution",
        text: "We built a conversational AI platform designed to simulate workplace interactions—from sales calls to performance reviews—offering learners a safe, responsive environment to practice and improve. The system also included performance evaluation features, giving users tangible feedback to help them grow."
      },
      {
        title: "Design Strategy: Scale, Realism, and Differentiation",
        text: "What set this project apart was our ability to leverage Udemy's marketplace of tens of thousands of instructors. From the beginning, we focused on differentiation by empowering scale: designing tools for instructors to create thousands of roleplay scenarios—far beyond the handful most competitors could offer. We also prioritized polishing the learner experience, focusing on usability and fidelity to real-world communication to make the experience intuitive and engaging. A key design challenge was encouraging instructors to create short, focused roleplays rather than long, course-length simulations. We solved this through thoughtful UX patterns: default time limits, clear goals per scenario, and helpful prompts that gently guided them toward the behavior we needed."
      },
      {
        title: "A Critical Course Correction",
        text: "Midway through the project, I identified a significant misalignment between our visual design direction and the kind of experience we were trying to create. While the UI was visually appealing and well-liked internally, it clashed with the realism we needed for serious, workplace-based roleplay. I challenged the team to take 48 hours to explore alternatives—something more grounded in the aesthetics of workplace communication tools like Slack or Zoom. That focused sprint led to a breakthrough: a clean, believable interface that supported both the tone and utility of our roleplays. It's the version we're using today, and it consistently gets strong feedback from learners and internal stakeholders alike."
      },
      {
        title: "Immediate Product Market Fit",
        text: "As a leadership team we set what we thought was an ambitious target of 1000 new roleplays to be created on the platform by the end of 2025. Our competitors had a few dozen when we started the project. We launched the beta to our Instructors in late April and we immediately seen lots of engagement and got lots of feedback on how to improve the feature. By early June we had 1200 new roleplays on the platform and at one stage Instructors created 500 new roleplays in just 48 hours. This was a result of a huge team effort but the product design was the key to success."
      },
      {
        title: "Outcome & Reflection",
        text: "This project represents the kind of high-impact, cross-functional design leadership I love: combining user insight, business goals, and fast iteration to ship something bold. We didn't just add a new feature—we opened up a new way for people to learn by doing, at scale."
      }
    ]
  };

  const [targetNumber, setTargetNumber] = useState(0);
  const [actualNumber, setActualNumber] = useState(0);
  const targetRef = useRef(null);
  const actualRef = useRef(null);
  const isTargetInView = useInView(targetRef, { once: true });
  const isActualInView = useInView(actualRef, { once: true });

  useEffect(() => {
    if (isTargetInView) {
      setTargetNumber(1000);
    }
  }, [isTargetInView]);

  useEffect(() => {
    if (isActualInView) {
      // Slot machine effect for actual number
      let currentNumber = 0;
      const interval = setInterval(() => {
        currentNumber += Math.floor(Math.random() * 200) + 50;
        if (currentNumber >= 1500) {
          setActualNumber(1500);
          clearInterval(interval);
        } else {
          setActualNumber(currentNumber);
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isActualInView]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDesignStrategyIndex, setCurrentDesignStrategyIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <article className="w-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6">
            {projectData.title}
          </h1>
          
          {/* Categories/Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {projectData.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>

          {/* Hero Video */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <video
              src={projectData.heroVideo}
              loop
              autoPlay
              muted
              className="w-full h-auto rounded-[15px]"
              poster=""
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-4 sm:mb-6 lg:mb-8 leading-tight">
              {projectData.subtitle}
            </h2>
            
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8 sm:mb-12">
              {projectData.description}
            </p>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            {/* Problem and Solution side by side on large screens */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {projectData.content.slice(0, 2).map((section, index) => (
                  <div key={index}>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Remaining sections */}
            {projectData.content.slice(2).map((section, index) => (
              <div key={index + 2}>
                {section.title === "Design Strategy: Scale, Realism, and Differentiation" ? (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8">
                      {section.text}
                    </p>
                    
                    {/* Design Strategy Image Gallery */}
                    <div className="w-full">
                      <div className="relative">
                        <div className="h-96 sm:h-[500px] lg:h-[600px] relative overflow-hidden rounded-lg">
                          <motion.div
                            className="flex h-full"
                            animate={{ x: `${-100 * currentDesignStrategyIndex}%` }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="w-full h-full flex-shrink-0 relative">
                              <Image
                                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//voice%20play.png"
                                alt="Voice Play"
                                fill
                                className="object-contain rounded-[15px]"
                              />
                            </div>
                            <div className="w-full h-full flex-shrink-0 relative">
                              <Image
                                src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//filled.png"
                                alt="Filled"
                                fill
                                className="object-contain rounded-[15px]"
                              />
                            </div>
                          </motion.div>
                        </div>

                        {/* Navigation buttons */}
                        <button
                          onClick={() => setCurrentDesignStrategyIndex(Math.max(0, currentDesignStrategyIndex - 1))}
                          disabled={currentDesignStrategyIndex === 0}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#242424] p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setCurrentDesignStrategyIndex(Math.min(1, currentDesignStrategyIndex + 1))}
                          disabled={currentDesignStrategyIndex === 1}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#242424] p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Dots indicator */}
                        <div className="flex justify-center mt-4 space-x-2">
                          {[0, 1].map((index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentDesignStrategyIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentDesignStrategyIndex === index ? 'bg-[#242424]' : 'bg-[#242424]/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : section.title === "A Critical Course Correction" ? (
                  <div className="w-full bg-[#CCE0D9]">
                    <div className="max-w-4xl mx-auto">
                      <div className="w-full min-h-screen flex items-center">
                        <div className="w-full">
                          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                            {/* Image Section - Centered in first 50% */}
                            <div className="flex items-center justify-center lg:justify-end pr-8 lg:pr-16">
                              <div className="w-full lg:w-3/5 relative">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//old%20stule.webp"
                                  alt="Old Style Design"
                                  width={600}
                                  height={800}
                                  className="w-full h-auto object-contain rounded-[15px]"
                                />
                              </div>
                            </div>
                            
                            {/* Content Section - Second 50% */}
                            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                                {section.title}
                              </h4>
                              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                                {section.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {section.text}
                    </p>
                    {section.title === "Immediate Product Market Fit" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <motion.div 
                          ref={targetRef}
                          initial={{ opacity: 0, y: 50 }}
                          animate={isTargetInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="text-center border border-[#242424] p-8"
                        >
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-2">
                            Target Roleplays for 2025
                          </h3>
                          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] leading-none">
                            {targetNumber}
                          </h1>
                        </motion.div>
                        <motion.div 
                          ref={actualRef}
                          initial={{ opacity: 0, y: 50 }}
                          animate={isActualInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                          className="text-center border border-[#242424] p-8"
                        >
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-2">
                            Actual Roleplays Jun 15
                          </h3>
                          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] leading-none">
                            {actualNumber}
                          </h1>
                        </motion.div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop: Show all images side by side */}
            <div className="hidden lg:flex gap-8 lg:gap-12">
              <div className="flex-1 h-96 lg:h-[500px] relative">
                <Image
                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Hint.png"
                  alt="AI Roleplay Hint"
                  fill
                  className="object-contain rounded-[15px]"
                />
              </div>
              <div className="flex-1 h-96 lg:h-[500px] relative">
                <Image
                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Learner%20talks.png"
                  alt="Learner Talks"
                  fill
                  className="object-contain rounded-[15px]"
                />
              </div>
              <div className="flex-1 h-96 lg:h-[500px] relative">
                <Image
                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Learner%20feedback.png"
                  alt="Learner Feedback"
                  fill
                  className="object-contain rounded-[15px]"
                />
              </div>
            </div>

            {/* Mobile/Tablet: Carousel with navigation */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="h-96 sm:h-[400px] relative overflow-hidden rounded-lg">
                  <motion.div
                    className="flex h-full"
                    animate={{ x: `${-100 * currentImageIndex}%` }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="w-full h-full flex-shrink-0 relative">
                      <Image
                        src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Hint.png"
                        alt="AI Roleplay Hint"
                        fill
                        className="object-contain rounded-[15px]"
                      />
                    </div>
                    <div className="w-full h-full flex-shrink-0 relative">
                      <Image
                        src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Learner%20talks.png"
                        alt="Learner Talks"
                        fill
                        className="object-contain rounded-[15px]"
                      />
                    </div>
                    <div className="w-full h-full flex-shrink-0 relative">
                      <Image
                        src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Learner%20feedback.png"
                        alt="Learner Feedback"
                        fill
                        className="object-contain rounded-[15px]"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                  disabled={currentImageIndex === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#242424] p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex(Math.min(2, currentImageIndex + 1))}
                  disabled={currentImageIndex === 2}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-[#242424] p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentImageIndex === index ? 'bg-[#242424]' : 'bg-[#242424]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
} 