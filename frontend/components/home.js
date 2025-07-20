import React from "react";
import {
  FileText,
  SearchCheck,
  Brain,
  UploadCloud,
  Mail,
} from "lucide-react";
import Link from "next/link";

const BG_PATTERN =
  "bg-[url('https://www.transparenttextures.com/patterns/white-diamond-dark.png')]";

<div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>

const HomePage = () => {
  return (
    <main
      className={`min-h-screen ${BG_PATTERN} transition-colors duration-300 `}
    >
      {/* ---- Hero Section ---- */}
      <section className="flex flex-col items-center justify-center text-center px-4 pb-20 pt-24 md:pt-32">
        <div className="relative max-w-4xl mx-auto overflow-visible">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-400/25 blur-3xl opacity-50 animate-pulse" />
          <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-green-500 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
            Welcome to PaperSense
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-blue-100 mb-12 leading-relaxed px-2 font-medium">
            Upload your past exam papers, extract important questions using AI,
            and generate smart study plans tailored to your syllabus
            <span className="inline-block mx-1 animate-pulse">✨</span>
            <br />
            <span className="text-base sm:text-lg text-muted-foreground dark:text-gray-300 opacity-80 font-normal">
              Powered by advanced machine learning.
            </span>
          </p>
          <div className="flex justify-center w-full">
            <Link href="/upload">
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-green-500 to-blue-500 hover:from-blue-700 hover:via-blue-600 hover:to-green-600 dark:from-blue-500 dark:to-cyan-500 text-white font-semibold px-10 py-4 rounded-2xl shadow-2xl hover:shadow-blue-700/30 transition-all duration-200 transform hover:scale-105 ring-2 ring-blue-500/20 backdrop-blur-md">
                <UploadCloud className="w-6 h-6 animate-bounce-slow" />
                <span className="tracking-wide">Start Uploading Papers</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Features Section ---- */}
      <section className="relative bg-transparent py-20 px-4 sm:px-6 lg:px-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-2/3 h-48 rounded-full bg-blue-300/20 dark:bg-blue-800/10 blur-3xl absolute top-10 left-1/3 -rotate-12 animate-float" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 bg-gradient-to-r from-blue-700 via-indigo-500/90 to-green-400 dark:from-blue-400 dark:via-blue-600 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow">
            Key Features
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-16 max-w-2xl mx-auto px-4 font-medium">
            Discover how PaperSense transforms your study experience with cutting-edge AI technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0">
            <FeatureCard
              icon={
                <span className="bg-blue-50 dark:bg-blue-800/20 rounded-xl p-2">
                  <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </span>
              }
              title="Text Extraction"
              desc="Accurately extract content from PDFs and scanned images using advanced OCR technology."
            />
            <FeatureCard
              icon={
                <span className="bg-green-50 dark:bg-green-700/20 rounded-xl p-2">
                  <SearchCheck className="w-10 h-10 text-green-600 dark:text-green-400" />
                </span>
              }
              title="Smart Filtering"
              desc="Automatically remove headers, footers, and clutter to focus on essential content."
            />
            <FeatureCard
              icon={
                <span className="bg-indigo-50 dark:bg-indigo-700/20 rounded-xl p-2">
                  <Brain className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                </span>
              }
              title="AI Insights"
              desc="Predict frequently asked questions and identify important topics using intelligent models."
            />
            <FeatureCard
              icon={
                <span className="bg-green-50 dark:bg-green-700/20 rounded-xl p-2">
                  <UploadCloud className="w-10 h-10 text-green-600 dark:text-green-400" />
                </span>
              }
              title="Instant Upload"
              desc="Add up to 5 PDFs or images and begin AI-powered extraction immediately."
            />
          </div>
        </div>
      </section>

      {/* ---- Why Section ---- */}
      <div className="max-w-3xl mx-auto mt-20 text-center px-4">
        <div className="bg-white/70 dark:bg-blue-900/40 rounded-3xl p-8 border border-blue-100/60 dark:border-blue-800/60 shadow-xl backdrop-blur-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-800 dark:text-blue-200 mb-5 drop-shadow">
            Why Choose PaperSense?
          </h3>
          <p className="text-blue-700 dark:text-blue-200 text-lg leading-relaxed font-medium">
            Our AI-powered platform helps students analyze past papers more efficiently,
            identify patterns in exam questions, and create personalized study plans.
            <span className="inline-block px-1 animate-pulse">🎓</span>
            Save time and study smarter with intelligent insights.
          </p>
        </div>
      </div>

      {/* ---- Minimal Contact Section ---- */}
      <section className="bg-transparent py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200 drop-shadow">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Have any questions, suggestions, or need help?
          </p>
          <a href="mailto:souravkumar18835@gmail.com" className="flex items-center justify-center gap-3 text-lg text-blue-700 dark:text-blue-300 hover:underline">
            <Mail className="w-6 h-6" />
            <span>support@papersense.ai</span>
          </a>

        </div>
      </section>
    </main>
  );
};

// ------ Feature Card ------
const FeatureCard = ({ icon, title, desc }) => (
  <div className="relative p-0.5 bg-gradient-to-tl from-purple-500/50 to-blue-500/50 rounded-3xl hover:scale-105 transition-all duration-300 transform hover:from-blue-500 hover:to-purple-500">
    <div className="relative h-full bg-white dark:bg-gray-900/60 shadow-xl rounded-3xl p-7 text-left hover:shadow-2xl  border border-gray-100 dark:border-gray-700 group backdrop-blur-[2px]">
      <div className="mb-5 flex items-center justify-start">
        <span className="inline-block group-hover:scale-110 transition-transform duration-200">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-base text-gray-700 dark:text-gray-200/90 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default HomePage;
