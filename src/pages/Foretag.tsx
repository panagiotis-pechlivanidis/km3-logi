
import React from "react";
import Navigation from "@/components/Navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ApartmentCard from "@/components/ApartmentCard";

const Foretag = () => {
  const businessApartments = [
    {
      title: "Executive Business Suite",
      price: "25,000 kr/month",
      beds: 2,
      baths: 2,
      sqft: 85,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    },
    {
      title: "Corporate Downtown Office",
      price: "18,500 kr/month", 
      beds: 1,
      baths: 1,
      sqft: 65,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Premium Business Center",
      price: "32,000 kr/month",
      beds: 3,
      baths: 2,
      sqft: 110,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      title: "Modern Corporate Flat",
      price: "22,000 kr/month",
      beds: 2,
      baths: 1,
      sqft: 75,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
    },
    {
      title: "Luxury Business Apartment",
      price: "28,500 kr/month",
      beds: 2,
      baths: 2,
      sqft: 95,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      title: "Corporate Penthouse Suite",
      price: "45,000 kr/month",
      beds: 4,
      baths: 3,
      sqft: 150,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="min-h-screen flex w-full bg-white">
      <Navigation />
      <main className="flex-1">
        <div className="p-4">
          <SidebarTrigger />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Företag Lägenheter</h1>
            <p className="text-gray-600 text-lg">
              Professionella boendealternativ för företag i Norrköping. 
              Perfekt för företagsanställda, projektteam och affärsresenärer som behöver kvalitetsboende.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessApartments.map((apartment, index) => (
              <ApartmentCard
                key={index}
                title={apartment.title}
                price={apartment.price}
                beds={apartment.beds}
                baths={apartment.baths}
                sqft={apartment.sqft}
                image={apartment.image}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Om Företagshyror</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Företagsfördelar</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fakturering direkt till företag</li>
                  <li>• Flexibla hyresperioder</li>
                  <li>• Konferensrum tillgängligt</li>
                  <li>• Businesscenter-tjänster</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Krav & Villkor</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Registrerat företag krävs</li>
                  <li>• Organisations-/företagsnummer</li>
                  <li>• Minimum 1 månads hyra</li>
                  <li>• Företagsreferenser</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Foretag;
