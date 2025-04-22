
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Capital Hill Tours – Private Austin Bronco Tours";
  }, []);

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-gray py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold">CONTACT US</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours & Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Opening Hours</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-medium">Sunday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Monday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Tuesday</p>
                  <p>Closed</p>
                </div>
                <div>
                  <p className="font-medium">Wednesday</p>
                  <p>Closed</p>
                </div>
                <div>
                  <p className="font-medium">Thursday</p>
                  <p>Closed</p>
                </div>
                <div>
                  <p className="font-medium">Friday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+15122982653" className="text-burnt-orange hover:underline">
                    +1 512-298-2653
                  </a>
                </div>
                
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:capitalhilltours@gmail.com" className="text-burnt-orange hover:underline">
                    capitalhilltours@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium">Address</p>
                  <p>1234 Hill Country Boulevard</p>
                  <p>Austin, TX 78746</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Tour
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-[450px] bg-neutral-gray rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110200.41784310427!2d-97.80961247889668!3d30.307982577482125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Capital Hill Tours Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-section bg-neutral-gray">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
