import { useState, useEffect } from 'react';
import fire1 from '../assets/fire/Fire1.svg';
import fire2 from '../assets/fire/Fire2.svg';
import fire3 from '../assets/fire/Fire3.svg';
import fire4 from '../assets/fire/Fire4.svg';
import logs from '../assets/fire/Logs.svg';
import miniMe from '../assets/fire/MiniMe.svg';

const fireFrames = [fire1, fire2, fire3, fire4];

export default function CampFire() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % fireFrames.length);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-14 left-52 h-0 overflow-visible pointer-events-none -scale-x-100">
      <div className="flex">
        <div className="relative -bottom-4 translate-x-24 pointer-events-none">
            <img src={miniMe} alt="mini me" className='w-14' />
        </div>
        <div className="relative -bottom-5 w-8 pointer-events-none">
        <img 
            src={logs} 
            alt="campfire logs" 
            className="absolute bottom-0 w-full" 
        />
        {fireFrames.map((frame, index) => (
            <img
            key={index}
            src={frame}
            alt=""
            className={`absolute bottom-2 w-full ${
                index === frameIndex ? 'opacity-100' : 'opacity-0'
            }`}
            />
        ))}
        </div>
      </div>
    </div>
  );
}