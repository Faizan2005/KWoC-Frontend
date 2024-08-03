import React from 'react';

interface StatsCardProps {
  title: string;
  description: string;
  image: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, description, image }) => {
  return (
    <div className="text-zinc-100 text-center bg-black/50 backdrop-blur-sm mx-4 mb-10 lg:w-1/4 sm:w-3/4 px-4 py-16 border border-[#FFFFFF]/[0.16] rounded-[10px] hover:cursor-pointer">
      <img className="px-10 pb-6" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-5xl mb-2">{title}</div>
        <p className="text-lightgray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default StatsCard;
