
import { useState } from 'react';

interface GuideCardProps {
  name: string;
  role: string;
  bio: string;
  favoriteSpot: string;
  imageUrl: string;
}

const GuideCard = ({ name, role, bio, favoriteSpot, imageUrl }: GuideCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };
  
  return (
    <div 
      className="relative h-[400px] md:h-[450px] w-full perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleFlip}
    >
      <div className={`w-full h-full transition-all duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front Card */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md overflow-hidden ${isFlipped ? 'hidden md:block' : ''}`}>
          <img 
            src={imageUrl} 
            alt={`${name}, ${role} at Capital Hill Tours`}
            className="w-full h-2/3 object-cover"
          />
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-ink-black">{name}</h3>
            <div className="inline-block px-3 py-1 mt-1 mb-2 bg-burnt-orange text-white text-sm font-medium rounded">
              {role}
            </div>
          </div>
        </div>
        
        {/* Back Card */}
        <div className={`absolute w-full h-full backface-hidden bg-white rounded-lg shadow-md overflow-hidden ${!isFlipped ? 'hidden md:block md:rotate-y-180' : ''}`}>
          <div className="p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-ink-black mb-2">{name}</h3>
            <div className="inline-block px-3 py-1 mb-4 bg-burnt-orange text-white text-sm font-medium rounded">
              {role}
            </div>
            
            <p className="text-ink-black mb-4 flex-grow">{bio}</p>
            
            <div className="mt-auto">
              <p className="font-bold text-ink-black">Favourite Austin Spot:</p>
              <p className="text-burnt-orange">{favoriteSpot}</p>
            </div>
          </div>
        </div>
        
        {/* Mobile content (shows back content directly without flip) */}
        <div className="md:hidden absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${name}, ${role} at Capital Hill Tours`}
            className="w-full h-1/3 object-cover"
          />
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-ink-black">{name}</h3>
            <div className="inline-block px-3 py-1 mt-1 mb-2 bg-burnt-orange text-white text-sm font-medium rounded">
              {role}
            </div>
            
            <p className="text-ink-black text-sm mb-4">{bio}</p>
            
            <div>
              <p className="font-bold text-ink-black text-sm">Favourite Austin Spot:</p>
              <p className="text-burnt-orange text-sm">{favoriteSpot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
