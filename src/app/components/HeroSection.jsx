"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left sm:mt-8">
          <h1 className="text-white mb-4 text-6xl font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Krystal",
                1000,
                "Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Full-stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="space-y-4 text-white text-sm font-barlow font-light sm:text-base mb-6 lg:text-base">
            <p>
              I’m Krystal, a software engineer and entrepreneur based in Greater Seattle Area, Washington. 
            </p>
            <p>
              I started coding 5 years ago. Back in 2020, I decided to try my hand at creating a pomodoro clock in order to improve my efficiency at work. Then I tumbled head first into the rabbit hole of coding and web development.
            </p>
            <p>
              There were lots of changes in my personal life during the past 5 years. After working for a startup in Vancouver, I moved to a new city, spent time taking care of family new member, as well as improving my coding skills. Get so many things done in a short period of time, my strong time management skills will help me a lot on the next job.
            </p>
            <p>
              In my free time, I’ve built a lot of web applications, not only on Django, Python, React, also on AWS. I keep reading books on becoming a better software engineer, I also play tennis.
            </p>
          </div>
          <div>
            <a type="button" href="mailto:kongyangmakrystal@gmail.com" className="px-6 py-3 w-full font-barlow sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-slate-600">Hire Me</a>
            <a className="px-6 py-3 w-full sm:w-fit font-barlow rounded-full bg-transparent hover:bg-slate-600 text-white border-white border-2m mt-3" href="/krystalma-SDE-resume.pdf">View Resume</a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;