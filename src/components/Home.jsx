import React, { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [slideDone, setSlideDone] = useState(false);
  const [skyTransitionStarted, setSkyTransitionStarted] = useState(false);
  const [sunGone, setSunGone] = useState(false);

  const hasTyped = useRef(false);
  const fullText = "I'm Zeynep Esirgenci Kum";

  useEffect(() => {
    if (!slideDone || hasTyped.current) return;
  
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;
  
      if (index === fullText.length) {
        clearInterval(interval);
        hasTyped.current = true;
        setSkyTransitionStarted(true);
      }
    }, 100);
  
    return () => clearInterval(interval);
  }, [slideDone]);

  return (
    <div name='home' className="relative w-full h-screen overflow-hidden bg-[#87CEFA]">
      <div className={`absolute inset-0 z-0 ${skyTransitionStarted ? 'animate-sky' : ''}`}></div>

      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <p
          className="text-600 text-lg animate-slide-down text-[#365c57]"
          onAnimationEnd={() => setSlideDone(true)}
        >
          Great Seeing You!
        </p>

        {slideDone && (
          <>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#365c57] leading-snug tracking-wide">
              {typedText}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#365c57] mt-4">
              Software Developer & Engineer
            </h2>
          </>
        )}
      </div>

      {/* Sun Element */}
      <div
        onAnimationEnd={() => setSunGone(true)}
        className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-yellow-400 rounded-full opacity-100 ${skyTransitionStarted ? 'animate-sun' : ''}`}
      ></div>

      {/* Stars Element */}
      <div className={`absolute inset-0 z-0 ${sunGone ? 'animate-stars' : ''}`}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-0 ${sunGone ? 'animate-stars' : ''}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        .text-600 {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slideDown 1s ease-out forwards;
        }

        @keyframes skyTransition {
          0% {
            background: #87CEFA;
          }
          50% {
            background:rgba(231, 215, 129, 0.38);
          }
          100% {
            background: #2c3e50;
          }
        }

        .animate-sky {
          animation: skyTransition 10s ease-in-out forwards;
        }

        @keyframes sunMovement {
          0% {
            opacity: 1;
            top: 25%;
            transform: translateX(-50%);
          }
          100% {
            opacity: 0;
            top: -10%;
            transform: translateX(150%);
          }
        }

        .animate-sun {
          animation: sunMovement 10s ease-in-out forwards;
        }

        @keyframes starTwinkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-stars {
          animation: starTwinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
