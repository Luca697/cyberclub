import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Eye, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsPanelProps {
  news: NewsItem[];
}

const NewsPanel: React.FC<NewsPanelProps> = ({ news }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section
      id="news"
      className="min-h-screen pt-32 pb-16 px-4 flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Neuigkeiten
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bleib auf dem Laufenden mit den neuesten Updates, Events und Ankündigungen aus der CyberClub Community.
          </p>
        </div>

        {/* Featured News Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md shadow-2xl border border-white/10 mb-12">
          <div className="relative h-[600px] animate-fadeIn transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${news[activeIndex].imageUrl || 'https://images.pexels.com/photos/4062932/pexels-photo-4062932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
                  <Calendar size={16} className="text-cyan-400" />
                  <span className="text-cyan-400 font-medium">{news[activeIndex].date}</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                  <Eye size={16} className="text-purple-400" />
                  <span className="text-purple-400 font-medium">Featured</span>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {news[activeIndex].title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-4xl leading-relaxed">
                {news[activeIndex].content}
              </p>

              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span>Weiterlesen</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-0 right-0 bottom-6 flex justify-center space-x-2">
            {news.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 w-8' 
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-cyan-500/50 shadow-lg shadow-cyan-500/20' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div 
                className="h-48 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${item.imageUrl || 'https://images.pexels.com/photos/4062932/pexels-photo-4062932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{item.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.content}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-200">
                  <span>Mehr lesen</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPanel;
