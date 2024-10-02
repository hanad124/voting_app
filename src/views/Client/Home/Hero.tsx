"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Vote, Users, Clock } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import heroImage from "@/app/public/assets/president.svg";

export default function HeroSection() {
  const [voteCount, setVoteCount] = useState(3782);
  const [candidateCount] = useState(42);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVoteCount(
        (prevCount) => prevCount + Math.floor(Math.random() * 3) + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white mt-16 md:mt-0">
      <div className="absolute inset-0 bg-[url('/light-pattern.svg')] opacity-5"></div>
      <div className="container relative z-10 mx-auto px-4 py-20 md:px-6 md:py-32">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          <div className="flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-slate-600 to-slate-900 bg-clip-text text-transparent">
                  Empower Your Campus
                </span>
                <br />
                <span className="text-slate-800">Vote for Change</span>
              </h1>
              <p className="max-w-[600px] text-xl text-slate-600 md:text-2xl">
                Participate in the digital transformation of student governance.
                Your vote is the cornerstone of campus evolution.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group bg-slate-800 text-white hover:bg-slate-700 text-lg px-8 py-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-slate-300/50"
              >
                Cast Your Vote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-slate-800 hover:bg-slate-100 text-lg px-8 py-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-slate-200/50"
              >
                Meet Candidates
              </Button>
            </motion.div>
          </div>
          <div className="relative aspect-square">
            <motion.div
              variants={itemVariants}
              className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-4 border-dashed border-slate-300 rounded-full"
            ></motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute inset-8 overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-white shadow-xl"
            >
              <Image
                src={heroImage}
                width={500}
                height={500}
                alt="Diverse university students"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-white/30"></div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg w-full max-w-sm"
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Vote className="h-8 w-8 mx-auto mb-2 text-slate-600" />
                  <div className="text-2xl font-bold text-slate-800">
                    {voteCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">Votes Cast</div>
                </div>
                <div>
                  <Users className="h-8 w-8 mx-auto mb-2 text-slate-600" />
                  <div className="text-2xl font-bold text-slate-800">
                    {candidateCount}
                  </div>
                  <div className="text-sm text-slate-500">Candidates</div>
                </div>
                <div>
                  <Clock className="h-8 w-8 mx-auto mb-2 text-slate-600" />
                  <div className="text-2xl font-bold text-slate-800">24h</div>
                  <div className="text-sm text-slate-500">Time Left</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
