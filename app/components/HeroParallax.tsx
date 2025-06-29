'use client';
import { useEffect, useRef } from 'react';

export default function HeroParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const x = ((offsetX / rect.width) - 0.5) * 80;
      const y = ((offsetY / rect.height) - 0.5) * 80;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28 bg-zinc-900 text-white">
      {/* Noise overlay */}
      <div className="absolute inset-0 z-0 bg-noise opacity-30 pointer-events-none" />
      {/* Background icons layer */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 transition-transform duration-200 ease-out pointer-events-none hidden md:block"
      >
        <img src="/icons/python.png" className="absolute top-10 left-50 w-18 opacity-10" />
        <img src="/icons/js.png" className="absolute top-1/2 left-[25%] w-20 opacity-10" />
        <img src="/icons/cpp.svg" className="absolute bottom-20 right-90 w-18 opacity-10" />
        <img src="/icons/java.svg" className="absolute top-5 right-[25%] w-20 opacity-10" />
        <img src="/icons/csharp.svg" className="absolute bottom-10 left-[15%] w-18 opacity-10" />
        <img src="/icons/ts.svg" className="absolute top-1/3 right-[10%] w-20 opacity-10" />
        <img src="/icons/php.png" className="absolute top-1 right-[40%] w-20 opacity-10" />
        <img src="/icons/react.png" className="absolute bottom-13 left-[40%] w-18 opacity-10" />
        <img src="/icons/rubyonrails.png" className="absolute top-1/2 left-[60%] w-20 opacity-10" />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="text-white">Achieve</span>{' '}
          <span className="text-red-500">mastery</span>{' '}
          <span className="text-white">through challenge</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
          Improve your dev skills by training on real code. Go beyond speed — learn flow.
        </p>
        <a
          href="/play"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
