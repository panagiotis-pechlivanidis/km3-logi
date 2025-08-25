
import React, { useState } from "react";
import SimpleNavigation from "@/components/SimpleNavigation";
import ApartmentCard from "@/components/ApartmentCard";
import ApartmentModal from "@/components/ApartmentModal";

const Moblerad = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const furnishedApartments = [
    {
      title: "Fully Furnished Studio",
      price: "12,500 kr/month",
      beds: 1,
      baths: 1,
      sqft: 45,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      ]
    },
    {
      title: "Modern Furnished Apartment", 
      price: "15,000 kr/month",
      beds: 2,
      baths: 1,
      sqft: 65,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    {
      title: "Cozy Furnished Flat",
      price: "13,500 kr/month",
      beds: 2,
      baths: 2,
      sqft: 55,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      images: [
        "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
      ]
    },
  ];

  const handleApartmentClick = (apartment: any) => {
    setSelectedApartment(apartment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApartment(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SimpleNavigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Möblerade Lägenheter</h1>
            <p className="text-gray-600 text-lg">
              Upptäck vårt urval av fullt möblerade hyresrätter i Norrköping. 
              Perfekt för studenter, tillfälliga arbetsuppdrag eller dem som vill flytta in direkt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnishedApartments.map((apartment, index) => (
              <ApartmentCard
                key={index}
                title={apartment.title}
                price={apartment.price}
                beds={apartment.beds}
                baths={apartment.baths}
                sqft={apartment.sqft}
                image={apartment.image}
                onClick={() => handleApartmentClick(apartment)}
              />
            ))}
          </div>
          
          <div className="mt-12 mb-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Möblerade lägenheter i Norrköping</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    För dig som vill undvika krångel med möbler och inredning erbjuder vi möblerade lägenheter i Norrköping.
                    Här är allt på plats redan från start – från säng och soffa till köksutrustning. Perfekt för dig som vill flytta in direkt.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Passar särskilt bra för:</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Studenter som behöver en snabb bostadslösning</li>
                    <li>• Företag som ordnar boende för anställda</li>
                    <li>• Privatpersoner som vill prova på att bo i Norrköping en period</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Att hyra en möblerad lägenhet gör vardagen enkel och bekväm, samtidigt som du får ett hem med allt som behövs.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <img 
                  src="/lovable-uploads/e7d81ca5-4d7d-4e65-8934-82402c97fedb.png" 
                  alt="Modern apartment building in Norrköping" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>


          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Om Möblerade Lägenheter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Vad Som Ingår</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Komplett möblering och inredning</li>
                  <li>• Köksutrustning och vitvaror</li>
                  <li>• Sängkläder och handdukar</li>
                  <li>• Bredband och TV-tjänster</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Krav & Villkor</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Inkomstverifiering krävs</li>
                  <li>• Depositionen motsvarar 1-2 månader</li>
                  <li>• Minimum 3 månaders hyra</li>
                  <li>• Referenser krävs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ApartmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        apartment={selectedApartment}
      />
    </div>
  );
};

export default Moblerad;
