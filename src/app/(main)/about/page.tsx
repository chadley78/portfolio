"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const expertiseAreas = [
    {
      title: "Visionary Product Strategy",
      content: "I've led or contributed to the definition and execution of long-term product roadmaps and design vision for 10 years on Udemy Business. In that 10 years the product has gone from $5 million in annual recurring revenue to $500 million, in large part to long term thinking and a user centric strategy."
    },
    {
      title: "Cross-Functional Leadership",
      content: "I've always worked closely with leaders from Engineering, Product Management and numerous GTM teams to deliver product experiences with high adoption and long term impact for Udemy. I strive to understand their perspective and the constraints they are working within. This empathy and understanding of their role means I can also mentor and advise folks from different disciplines and be respected as a leader who can make informed, logical decisions."
    },
    {
      title: "Data-Informed Design",
      content: "I insist on being explicit about the metrics every single design project aims to improve and hold myself and my team accountable for achieving those results. Data helps us understand which design decisions worked and didn't and which should be repeated or not. Plus a designer without accountability for their design choices is a designer without the ability to learn from their good and bad decisions."
    },
    {
      title: "Scalability & Innovation",
      content: "I'm obsessed with product-market fit. For 10 years I've led design on a Saas product that went from an average customer size of less that 100 seats, to customers with hundreds of thousands of seats. I drove the changes to our user experience required to deal with that scale. All the while fighting to maintain an innovative and agile approach to deploying cutting edge learning technology."
    },
    {
      title: "Stakeholder Communication",
      content: "I enjoy strategic debate with executives and in turn they enjoy my clear rationale and logic for my point of view . I insist that my teams work in a transparent way, remaining constantly open to feedback from stakeholders. This is a challenging way to work (managing feedback can be exhausting) but the outcome is always a better informed project team, stakeholders and leadership team."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF2E8]">
      {/* Header Section - Same style as project pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[8.7rem] font-black text-[#242424] uppercase tracking-tight leading-none mb-4 sm:mb-6 text-center">
          About Me
        </h1>
      </div>

      {/* Expertise Areas Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full min-h-screen flex items-center bg-[#FAF2E8]"
                >
                  <div className="w-full">
                    <div className="grid grid-cols-1 min-h-screen">
                      {/* Content Section - Full width */}
                      <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="max-w-4xl mx-auto"
                        >
                          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.9rem] font-bold text-[#242424] mb-6 sm:mb-8 lg:mb-10 leading-tight">
                            {area.title}
                          </h2>
                          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[1.4rem] xl:text-[1.9rem] text-[#242424]/80 leading-relaxed">
                            {area.content}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 