import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/heroSlides';
import { useCarousel } from '../../hooks/useCarousel';
import { Button } from '../ui/Button';

const HeroCarousel: React.FC = () => {
  const { current, setCurrent } = useCarousel(heroSlides.length);
  if (!heroSlides.length) return <div className="h-96" />;

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === current ? 'translate-x-0' : index < current ? '-translate-x-full' : 'translate-x-full'}`}
          >
            <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-white space-y-4 max-w-2xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                  <Button>{slide.cta}</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"><ChevronLeft className="h-6 w-6" /></button>
      <button onClick={() => setCurrent((current + 1) % heroSlides.length)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"><ChevronRight className="h-6 w-6" /></button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
