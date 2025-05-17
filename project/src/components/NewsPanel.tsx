import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      className="min-h-screen pt-24 pb-16 px-4 flex flex-col justify-center relative bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative">
          <span className="text-green-500">Neuigkeiten</span>
          <div className="h-1 w-24 bg-green-500 mt-2"></div>
        </h2>

        <div className="relative overflow-hidden rounded-lg bg-zinc-800/60 shadow-xl border border-zinc-700">
          {/* Featured News */}
          <div className="relative h-[500px] animate-fadeIn transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${news[activeIndex].imageUrl || 'https://images.pexels.com/photos/4062932/pexels-photo-4062932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-block mb-3 px-3 py-1 bg-green-500 text-zinc-900 text-sm font-medium rounded-md">
                {news[activeIndex].date}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {news[activeIndex].title}
              </h3>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {news[activeIndex].content}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-0 right-0 bottom-4 flex justify-center space-x-2">
            {news.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-green-500 w-8' : 'bg-gray-500/50 hover:bg-gray-400/50'
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-800 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-800 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* News List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`bg-zinc-800/60 rounded-lg overflow-hidden border border-zinc-700 hover:border-green-500/50 transition-all duration-300 ${
                index === activeIndex ? 'ring-2 ring-green-500' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div 
                className="h-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.imageUrl || 'https://images.pexels.com/photos/4062932/pexels-photo-4062932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})`,
                }}
              ></div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPanel;