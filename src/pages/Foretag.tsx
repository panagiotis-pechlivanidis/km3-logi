
import React, { useState } from "react";
import SimpleNavigation from "@/components/SimpleNavigation";
import ApartmentCard from "@/components/ApartmentCard";
import ApartmentModal from "@/components/ApartmentModal";

const Foretag = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const businessApartments = [
    {
      title: "Executive Business Suite",
      price: "25,000 kr/month",
      beds: 2,
      baths: 2,
      sqft: 85,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      images: [
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1524230572899-a752b3835840"
      ]
    },
    {
      title: "Corporate Downtown Office",
      price: "18,500 kr/month", 
      beds: 1,
      baths: 1,
      sqft: 65,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
      ]
    },
    {
      title: "Premium Business Center",
      price: "32,000 kr/month",
      beds: 3,
      baths: 2,
      sqft: 110,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1524230572899-a752b3835840",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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
                onClick={() => handleApartmentClick(apartment)}
              />
            ))}
          </div>
          
          <div className="mt-12 mb-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Företagsboende i Norrköping</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Behöver ditt företag boende för anställda eller konsulter?
                    Vi erbjuder inflyttningsklara lägenheter med centralt läge, flexibla avtal och enkel administration.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Passar alla typer av företag:</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Konsultbolag med personal på uppdrag</li>
                    <li>• Industriföretag med projektanställda</li>
                    <li>• Mindre företag som vill erbjuda sina medarbetare boende i Norrköping</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Söker ditt företag boende i Norrköping för anställda, konsulter eller projektpersonal?
                    Vi erbjuder moderna företagslägenheter som kombinerar flexibilitet, trygghet och kostnadseffektivitet.
                    Perfekt för både korta uppdrag och längre projekt – ett smart alternativ till hotell.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <img 
                  src="/images/e7d81ca5-4d7d-4e65-8934-82402c97fedb.png" 
                  alt="Modern apartment building in Norrköping" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
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
          <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Redo att hitta ditt nya hem?</h2>
            <p className="text-lg mb-6 opacity-90">
              Kontakta oss idag för att diskutera dina behov och hitta den perfekta lägenheten för dig.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-medium rounded-md hover:bg-background/90 transition-colors"
            >
              Kontakta oss nu
            </a>
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

export default Foretag;
