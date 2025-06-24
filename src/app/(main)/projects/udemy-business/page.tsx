"use client";

import Image from "next/image";
import CategoryPill from "@/components/CategoryPill";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function UdemyBusinessProjectPage() {
  const projectData = {
    title: "Udemy Business",
    categories: ["B2B Design", "Product Design", "UX Research", "Leadership", "Growth"],
    heroVideo: "", // Will be added later
    subtitle: "How User-Centered Design Scaled a B2B Learning Platform from $5M to $500M",
    description: "When I joined Udemy Business as its first product designer, the B2B offering was still in its infancy, a promising idea in a company known for B2C scale. Over the next decade, I helped lead its transformation into a global learning platform serving thousands of organizations and millions of users. Eventually, I became Director of Product Design, overseeing the full experience from the first click by a buyer to the ongoing engagement of learners in the enterprise. This wasn't just about adding features. It was about deeply understanding the motivations, friction points, and expectations across three distinct user types: buyers, admins, and learners and using design as the connective tissue that aligned them.",
    content: [
      {
        title: "Designing at the Intersection of Complexity and Opportunity",
        text: "What makes B2B design fascinating is also what makes it hard: the overlapping but often conflicting needs of stakeholders. Buyers care about ROI and business alignment but often lack visibility into user needs. Admins demand efficiency and flexibility and reject anything that disrupts their workflow. Learners want ease, clarity, and progress, but will disengage the moment friction appears. Our breakthrough came from recognizing that end-user success drives everything including retention, upsell, and long-term platform growth. That belief became our north star."
      },
      {
        title: "User Research as Strategic Fuel",
        text: "We invested heavily in understanding the 'jobs-to-be-done' of each user type. One foundational research study into learner motivations became the backbone of our product strategy for years. It revealed not only what learners were trying to achieve but how we could help them feel competent, seen, and supported in that journey. We learned: Admins won't adopt tools that force them to alter familiar workflows. Buyers often misrepresent learner needs so proxying them in design decisions leads to misalignment. Engagement at the learner level is the strongest lever for long-term success. These truths became strategic pillars, used to frame roadmaps, shape marketing narratives, and prioritize our investments."
      },
      {
        title: "Crafting Interfaces that Earn Trust",
        text: "In the B2B world, first impressions matter. Buyers need to be impressed. Admins need to feel in control. Learners need confidence that they can succeed without needing training themselves. We designed for all three by prioritizing: Clarity over cleverness in UI language and structure, Accessible, intuitive data visualizations to prove value and reduce churn, Design systems robust enough to handle rebrands, yet flexible enough to support rapid iteration. Over the years, we navigated multiple rebrands and rebuilt our design system more than once. What once took months, we can now accomplish in weeks, without compromising quality."
      },
      {
        title: "From $5M to $500M: Design as a Growth Engine",
        text: "This wasn't just good design. It was design that moved the needle. Our focus on user success, workflow integration, and measurable ROI helped drive Udemy Business from $5 million in annual revenue to over $500 million. Adoption soared. Retention climbed. Admins became advocates. Buyers became champions. Learners actually wanted to engage and did so consistently. In a space crowded with promise and plagued by clunky enterprise UX, we built something better: a product that worked for people and the business."
      },
      {
        title: "What This Journey Taught Me",
        text: "Design leadership in B2B isn't about aesthetics—it's about systems thinking, stakeholder fluency, and relentless empathy. It's about finding elegant paths through complex terrain and delivering outcomes that scale. And above all, it's about believing that design is not just decoration—it's transformation."
      }
    ]
  };

  const [startRevenue, setStartRevenue] = useState(0);
  const [endRevenue, setEndRevenue] = useState(0);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const isStartInView = useInView(startRef, { once: true });
  const isEndInView = useInView(endRef, { once: true });

  useEffect(() => {
    if (isStartInView) {
      setStartRevenue(5);
    }
  }, [isStartInView]);

  useEffect(() => {
    if (isEndInView) {
      // Slot machine effect for end revenue
      let currentNumber = 0;
      const interval = setInterval(() => {
        currentNumber += Math.floor(Math.random() * 50) + 10;
        if (currentNumber >= 500) {
          setEndRevenue(500);
          clearInterval(interval);
        } else {
          setEndRevenue(currentNumber);
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isEndInView]);

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      <article className="w-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6">
            {projectData.title}
          </h1>
          
          {/* Categories/Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
            {projectData.categories.map((category, index) => (
              <CategoryPill key={index} category={category} />
            ))}
          </div>

          {/* Hero Video/Image Placeholder */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Image
              src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Desktop-Brand-Announcement-960x400-1.gif"
              alt="Udemy Business Brand Announcement"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
            {projectData.content.map((section, index) => (
              <div key={index}>
                {section.title === "From $5M to $500M: Design as a Growth Engine" ? (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8">
                      {section.text}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                      <motion.div 
                        ref={startRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isStartInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center border border-[#242424] p-8"
                      >
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-2">
                          2015 Revenue
                        </h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-black text-[#242424] leading-none">
                          ${startRevenue}M
                        </h1>
                      </motion.div>
                      <motion.div 
                        ref={endRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isEndInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="text-center border border-[#242424] p-8"
                      >
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] font-bold text-[#242424] mb-2">
                          2024 Revenue
                        </h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-black text-[#242424] leading-none">
                          ${endRevenue}M
                        </h1>
                      </motion.div>
                    </div>
                  </div>
                ) : section.title === "Crafting Interfaces that Earn Trust" ? (
                  <div className="w-full bg-[#CCE0D9]">
                    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                      <div className="w-full min-h-screen flex items-center">
                        <div className="w-full">
                          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-8 lg:gap-16">
                            {/* Content Section - First on mobile, second on desktop */}
                            <div className="flex flex-col justify-center order-1 lg:order-2">
                              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                                {section.title}
                              </h4>
                              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                                {section.text}
                              </p>
                            </div>
                            
                            {/* Image Section - Second on mobile, first on desktop */}
                            <div className="flex items-center justify-center order-2 lg:order-1">
                              <div className="w-full relative">
                                <Image
                                  src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Learner%20feedback%20dashboard.png"
                                  alt="Learner Feedback Dashboard"
                                  width={600}
                                  height={800}
                                  className="w-full h-auto object-contain rounded-lg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : section.title === "User Research as Strategic Fuel" ? (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed mb-8">
                      {section.text}
                    </p>
                    <div className="w-full mb-8">
                      <Image
                        src="https://ulethzcxykotndiahpmm.supabase.co/storage/v1/object/public/portfolio-assets//Lets%20Do%20It.png"
                        alt="User Research Strategy"
                        width={800}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      We also turned on the hosepipe of user feedback from Day 1. We incentivised CSM to provide us with with everything our customers were saying about the product in Slack. This exposed us to so much useful information which we used to shape and prioritise our regular UX research.
                    </p>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-bold text-[#242424] mb-4 sm:mb-6 leading-tight">
                      {section.title}
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-[0.815rem] xl:text-[1rem] font-normal text-[#242424] leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 