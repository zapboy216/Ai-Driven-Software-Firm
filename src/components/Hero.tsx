import Image from 'next/image';
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container relative mx-auto px-5 py-16">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              {title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <button className="mt-6 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <Image
              src={imageUrl}
              alt="Hero Image"
              width={300}
              height={225}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
