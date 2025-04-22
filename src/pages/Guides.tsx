
import { useEffect } from 'react';
import GuideCard from '@/components/GuideCard';

const guides = [
  {
    name: "Ken Johnson",
    role: "Lead Guide & Founder",
    bio: "Born and raised in Austin, Ken has spent over 15 years exploring every corner of the city. His passion for sharing Austin's unique culture and history led him to start Capital Hill Tours. When not leading tours, you can find Ken paddleboarding on Lady Bird Lake or sampling new local brews.",
    favoriteSpot: "The secret overlook at Mount Bonnell after sunset",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Maria Rodriguez",
    role: "Senior Guide",
    bio: "Maria brings her background in Texas history and boundless enthusiasm to every tour. Fluent in both English and Spanish, she specializes in showcasing Austin's cultural diversity and artistic communities. A graduate of UT Austin, Maria knows all the hidden gems that make this city special.",
    favoriteSpot: "The food truck park on East 6th Street",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Tyler Williams",
    role: "Adventure Guide",
    bio: "Former park ranger turned tour guide, Tyler specializes in Austin's outdoor treasures. With extensive knowledge of local geology, wildlife, and conservation efforts, he'll show you a side of Austin many visitors miss. An avid photographer, Tyler can also help you capture the perfect shots.",
    favoriteSpot: "The hidden swimming hole at Barton Creek Greenbelt",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

const Guides = () => {
  useEffect(() => {
    document.title = "Our Guides | Capital Hill Tours – Private Austin Bronco Tours";
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Guides</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our passionate local experts bring Austin to life with their knowledge, 
            stories, and genuine love for the city. Get to know the personalities that 
            make our tours special.
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="py-section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <GuideCard
                key={index}
                name={guide.name}
                role={guide.role}
                bio={guide.bio}
                favoriteSpot={guide.favoriteSpot}
                imageUrl={guide.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Explore Austin With Us?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Book a tour with one of our knowledgeable guides and experience 
              the best of Austin from a local's perspective.
            </p>
            <a 
              href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;
