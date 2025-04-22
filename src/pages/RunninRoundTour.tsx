
import { useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import TourAccordion from '@/components/TourAccordion';

const accordionItems = [
  {
    title: "Cancellation Policy",
    content: (
      <div>
        <p className="mb-2">
          We understand that plans change. Our cancellation policy is as follows:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full refund if canceled at least 24 hours before the tour</li>
          <li>50% refund if canceled between 12-24 hours before the tour</li>
          <li>No refund for cancellations less than 12 hours before the tour</li>
        </ul>
      </div>
    )
  },
  {
    title: "Parking & Directions",
    content: (
      <div>
        <p className="mb-2">
          We offer pickup within 4 miles of downtown Austin. If you prefer to meet us at our starting point:
        </p>
        <p className="font-medium">Capital Hill Tours Parking Lot</p>
        <p className="mb-2">1234 Hill Country Boulevard, Austin, TX 78746</p>
        <p>Free parking is available on-site for the duration of your tour.</p>
      </div>
    )
  },
  {
    title: "Pet & Service Animals",
    content: (
      <div>
        <p className="mb-2">
          Service animals are welcome on our tours. Please let us know in advance if you'll be bringing a service animal.
        </p>
        <p>
          Due to vehicle constraints and safety considerations, we cannot accommodate pets that are not service animals.
        </p>
      </div>
    )
  },
  {
    title: "Additional Information",
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Tours run rain or shine (unless weather conditions are unsafe)</li>
          <li>Sunscreen and hats are recommended</li>
          <li>Photography is encouraged and shared with your permission</li>
          <li>Gratuities for your guide are appreciated but not required</li>
        </ul>
      </div>
    )
  }
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    alt: "Austin landscape photography of mountain hit by sun rays"
  },
  {
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    alt: "Austin landmark photography of trees near rocky mountain under blue skies"
  },
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
    alt: "Water features in Austin"
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    alt: "Gray concrete bridge and waterfalls in Austin"
  },
  {
    url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80",
    alt: "Austin wildlife with deer on land near trees"
  }
];

const RunninRoundTour = () => {
  useEffect(() => {
    document.title = "Runnin' Round Austin Tour | Capital Hill Tours – Private Austin Bronco Tours";
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section 
        className="relative h-[300px] md:h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
          Runnin' Round Austin Tour
        </h1>
      </section>

      {/* Quick Details */}
      <section className="py-12 bg-neutral-gray">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Quick Details</h2>
          
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Duration:</strong> 1½ hours (no stops)</span>
            </li>
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Pickup:</strong> Within 4 miles of downtown</span>
            </li>
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Languages:</strong> English, Spanish</span>
            </li>
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Vehicle:</strong> 4-seat open-top Bronco</span>
            </li>
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Amenities:</strong> Bottled water & refreshments</span>
            </li>
            <li className="flex items-start">
              <span className="text-burnt-orange mr-2">•</span>
              <span><strong>Price:</strong> $125 per tour (up to 4 people)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tour Description */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose This Tour?</h2>
              
              <div className="space-y-4">
                <p>
                  Our Runnin' Round Austin Tour is perfect for travelers with limited time who still want to experience the best of what Austin has to offer. This high-energy 90-minute adventure takes you through the highlights of our vibrant city.
                </p>
                <p>
                  From the iconic skyline views to historic landmarks, you'll get a comprehensive introduction to Austin's unique character and charm. Your guide will share fascinating stories and local insights that you won't find in guidebooks.
                </p>
                <p>
                  Traveling in our open-air Bronco allows you to truly immerse yourself in the sights, sounds, and energy of Austin while covering more ground than you could on foot.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-lg"
                >
                  Book This Tour
                </a>
              </div>
            </div>
            
            <div>
              <ImageGallery images={galleryImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-neutral-gray">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
          <TourAccordion items={accordionItems} />
        </div>
      </section>

      {/* Mobile Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-ink-black">$125</p>
            <p className="text-sm text-gray-600">per tour (up to 4 people)</p>
          </div>
          
          <a 
            href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RunninRoundTour;
