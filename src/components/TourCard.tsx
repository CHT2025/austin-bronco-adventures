
import { Link } from 'react-router-dom';

interface TourCardProps {
  title: string;
  duration: string;
  price: number;
  description: string;
  imageUrl: string;
  tourUrl: string;
}

const TourCard = ({ 
  title, 
  duration, 
  price, 
  description, 
  imageUrl, 
  tourUrl 
}: TourCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md bg-white h-full">
      {/* Image with overlay */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${title} tour in Austin`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black/70 to-transparent"></div>
        
        {/* Tour title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <div className="flex items-center mt-1 text-white space-x-2">
            <span>{duration}</span>
            <span>•</span>
            <span>${price}</span>
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
        <p className="text-ink-black flex-grow mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <Link to={tourUrl} className="underline text-burnt-orange font-medium">
            View Details
          </Link>
          
          <a 
            href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
