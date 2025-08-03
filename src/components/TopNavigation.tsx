import React from "react";
import { Button } from "@/components/ui/button";
import { Building2, Home, Building, Briefcase, Calendar, Sofa } from "lucide-react";
import { Link } from "react-router-dom";

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

const TopNavigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div className="ml-2">
              <div className="text-sm font-semibold">UTHYRNING AV LÄGENHETER</div>
              <div className="text-xs text-gray-600">Norrköping</div>
            </div>
          </Link>
          
          {/* Navigation Menu */}
          <div className="flex items-center space-x-6">
            {apartmentCategories.map((item) => (
              <Link
                key={item.title}
                to={item.url}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;