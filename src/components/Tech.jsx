import React from 'react'
import { technologies } from "../data";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          Ball
        </div>
      ))}
    </div>
  );
};

export default Tech