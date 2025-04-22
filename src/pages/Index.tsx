
import { useEffect } from 'react';
import TourCard from '@/components/TourCard';
import ImageGallery from '@/components/ImageGallery';
import ContactForm from '@/components/ContactForm';
import { Instagram, Youtube } from 'lucide-react';

// Placeholder images
const broncoImage = "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80";
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    alt: "River between mountains under white clouds in Austin"
  },
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    alt: "Austin hill country landscape with deer"
  },
  {
    url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    alt: "Austin forest heated by sunbeam"
  }
];

const tours = [
  {
    title: "Runnin' Round",
    duration: "1½ hours",
    price: 125,
    description: "Our fastest, most exhilarating tour showcasing Austin's highlights. Perfect for visitors with limited time who want a taste of what makes Austin special.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    tourUrl: "/rratour"
  },
  {
    title: "Cruisin' Round",
    duration: "2½ hours",
    price: 215,
    description: "Our comprehensive adventure with stops at Austin's most iconic locations. Enjoy a deeper connection with the city's culture, history and hidden gems.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    tourUrl: "/cratour"
  }
];

const Index = () => {
  useEffect(() => {
    document.title = "Capital Hill Tours – Private Austin Bronco Tours";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${broncoImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              escape the crowds. discover austin your way with a private immersive tour
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Private open-air Bronco tours led by locals
            </p>
            <a href="#tours" className="btn-primary text-lg px-8 py-3">
              Explore Tours
            </a>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Tours</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tours.map((tour, index) => (
              <TourCard 
                key={index}
                title={tour.title}
                duration={tour.duration}
                price={tour.price}
                description={tour.description}
                imageUrl={tour.imageUrl}
                tourUrl={tour.tourUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section bg-neutral-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Austin</h2>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Social Banner */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-6">FOLLOW OUR SOCIALS</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com/capitalhilltours" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-black hover:text-burnt-orange transition-colors text-4xl"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={48} />
            </a>
            <a 
              href="https://youtube.com/@capitalhilltours" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-black hover:text-burnt-orange transition-colors text-4xl"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube size={48} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-neutral-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-6">
                Have questions about our tours or want to book a private experience? 
                Send us a message and we'll get back to you as soon as possible.
              </p>
              <p className="font-semibold">
                Or call us directly at{' '}
                <a href="tel:+15122982653" className="text-burnt-orange hover:underline">
                  +1 512-298-2653
                </a>
              </p>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
