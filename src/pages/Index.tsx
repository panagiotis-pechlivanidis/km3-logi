import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-white">
      <Navigation />
      <main className="flex-1">
        <div className="p-4">
          <SidebarTrigger />
        </div>
        {/* Hero Section with Static Flower Background */}
        <section className="relative h-[80vh] bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
          {/* Static flower background image with better clarity */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url('/lovable-uploads/5fd1055a-b013-4359-a3e2-e1b8f444e99f.png')` }}
          ></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">KM3 Logi AB</h1>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Apartments */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Apartments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Apartment 1 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                    alt="Luxury Downtown Loft" 
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Luxury Downtown Loft</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">$2,500/month</p>
                <p className="text-gray-600">2 Beds • 2 Baths • 1,200 sqft</p>
              </div>
              
              {/* Apartment 2 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                    alt="Modern City View Apartment" 
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern City View Apartment</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">$3,200/month</p>
                <p className="text-gray-600">3 Beds • 2 Baths • 1,500 sqft</p>
              </div>
              
              {/* Apartment 3 */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Riverside Studio" 
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Riverside Studio</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">$1,800/month</p>
                <p className="text-gray-600">1 Bed • 1 Bath • 800 sqft</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Properties <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Info Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">About KM3 Logi AB</h2>
                <p className="text-gray-700 mb-6">
                  Vi har företagslägenheter för uthyrning, de är fullt möblerade och redo att användas direkt.
                </p>
                <p className="text-gray-700 mb-6">
                  Du som kund kan hyra hos oss den perioden som passar dig, det kan vara kortare visiter eller längre perioder.
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
        
        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to schedule a viewing or learn more about our available apartments.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Haven Homes</h3>
                <p className="text-gray-400">
                  Finding you the perfect place to call home.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                <address className="text-gray-400 not-italic">
                  123 Apartment Lane<br />
                  New York, NY 10001<br />
                  info@havenhomes.com<br />
                  (555) 123-4567
                </address>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Haven Homes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
