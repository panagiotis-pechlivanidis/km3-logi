import React from "react";
import { Building2, Home, Building, Briefcase, MapPin, Calendar, Sofa } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const apartmentCategories = [
  {
    title: "Privat",
    url: "/private",
    icon: Home,
  },
  {
    title: "Företag",
    url: "/business",
    icon: Briefcase,
  },
  {
    title: "Möblerad",
    url: "/furnished",
    icon: Sofa,
  },
  {
    title: "Omöblerad",
    url: "/unfurnished",
    icon: Building,
  },
  {
    title: "Långtids / Korttids",
    url: "/rental-terms",
    icon: Calendar,
  },
];

const SimpleNavigation = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div className="ml-2">
              <div className="text-lg font-bold">KM3 Logi</div>
              <div className="text-xs text-gray-600">UTHYRNING AV LÄGENHETER</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {apartmentCategories.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <item.icon className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleNavigation;