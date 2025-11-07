import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from '../../public/images/ChatGPT_Image_Jul_3_2025_10_55_24_PM.png';

const apartmentCategories = [
  {
    title: "Lediga",
    url: "/private",
  },
  {
    title: "Företag",
    url: "/business",
  },
  {
    title: "Långtids / Korttids",
    url: "/rental-terms",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="relative">
        {/* Hero Section with Navigation Overlay */}
        <section className="relative h-[80vh] bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
          
          {/* Navigation overlay on the left */}
          <div className="absolute left-8 top-8 z-20 text-white">
            <div className="mb-8">
              <Link to="/" className="flex items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-white">Km3 förvaltning </div>
                  <div className="text-sm text-white/80"><strong>UTHYRNING AV LÄGENHETER </strong></div>
                  <div className="text-sm text-white/80"><strong>I NORRKÖPING</strong></div>
                </div>
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="text-lg font-semibold text-white mb-4">LÄGENHETER</div>
              {apartmentCategories.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.url}
                  className="flex items-center text-white hover:text-white/80 transition-colors duration-200 text-lg font-medium"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="text-sm text-white/80 flex items-start">
                <div>
                  <div><strong>Km3 förvaltning ab</strong> </div>
                  <div><strong>Koppargatan 3 </strong></div>
                  <div><strong>602 23 Norrköping</strong></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main hero content */}
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="hidden sm:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">Km3 förvaltning </h1>
            <div className="hidden sm:flex justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-sm sm:text-base border-white text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm">
                kontakta oss
                </Button>
              </Link>
            </div>
          </div>
        </section>

        
        
        {/* Info Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Om KM3 Logi </h2>
                <p className="text-gray-700 mb-6">
                Km3 förvaltning ab har varit verksamma i norrköping sedan 2002. Vi förvaltar circa 205 lägenheter samt, ett 20tal företagslägenheter för långtidsuthyrning. Vi har idag circa 20 möblerade företags långtidslägehenter
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511" 
                  alt="Building exterior" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Km3 förvaltning ab</h3>
                <p className="text-gray-400">
                  
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Snabblänkar</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Hem</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Kontakt</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                Kontaktinfo</h3>
                <address className="text-gray-400 not-italic">
                  <strong>Koppargatan 3, 602 23 Norrköping</strong><br />
                  caroline@km3logi.se<br />
                  073-812 23 33<br />
                </address>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p> {new Date().getFullYear()} Km3 förvaltning ab. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
