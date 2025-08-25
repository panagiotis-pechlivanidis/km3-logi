import React, { useState } from "react";
import SimpleNavigation from "@/components/SimpleNavigation";
import ApartmentCard from "@/components/ApartmentCard";
import ApartmentModal from "@/components/ApartmentModal";

const Privat = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const privateApartments = [
    {
      title: "Cozy Downtown Studio",
      price: "8,500 kr/month",
      beds: 1,
      baths: 1,
      sqft: 45,
      image: "/public/images/apt_6390ada7ecb67.avif",
      images: [
        "/public/images/apt_6390ada7ecb67.avif",
        "/public/images/apt_6390aeb36fc9b.avif",
        "/public/images/apt_6390aefb2971b.avif",
      ]
    },
    {
      title: "Modern City Apartment",
      price: "12,000 kr/month", 
      beds: 2,
      baths: 1,
      sqft: 65,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    {
      title: "Bright Central Flat",
      price: "10,500 kr/month",
      beds: 2,
      baths: 2,
      sqft: 55,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      images: [
        "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
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
            <h1 className="text-4xl font-bold mb-4">Privat Lägenheter</h1>
            <p className="text-gray-600 text-lg">
              Discover our selection of private rental apartments in Norrköping. 
              Perfect for individuals and families looking for quality housing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privateApartments.map((apartment, index) => (
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
                <h2 className="text-3xl font-bold mb-6">Våra lägenheter i Norrköping</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Vi erbjuder privata lägenheter i Norrköping för dig som söker ett hem med både trygghet och frihet. 
                    Alla våra bostäder är utformade för att ge dig hög trivsel och en vardag som fungerar i längden.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">När du hyr en lägenhet hos oss får du alltid:</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Egen bostad med kök, badrum och vardagsrum</li>
                    <li>• En lugn och trygg boendemiljö</li>
                    <li>• Flexibla alternativ som passar studenter, yrkesarbetande och familjer</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Oavsett om du behöver en mindre lägenhet för studier eller en större bostad för hela familjen, 
                    har vi alternativ som matchar dina behov. Våra lägenheter i Norrköping är välbelägna med närhet 
                    till service, grönområden och bra kommunikationer – perfekt för att skapa en vardag som passar just dig.
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
            <h2 className="text-2xl font-semibold mb-4">Om privat uthyrning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Vad som ingår</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Fullt utrustat kök</li>
                  <li>• Höghastighetsinternet</li>
                  <li>• Alla avgifter inkluderade</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Krav för hyra</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Verifiering av månadsinkomst</li>
                  <li>• Depositionsavgift krävs</li>
                  <li>• Minst 6 månaders hyresavtal</li>
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

export default Privat;
