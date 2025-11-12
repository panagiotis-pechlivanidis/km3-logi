import React, { useState } from "react";
import SimpleNavigation from "@/components/SimpleNavigation";
import ApartmentCard from "@/components/ApartmentCard";
import ApartmentModal from "@/components/ApartmentModal";

const Langtids = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const privateApartments = [
    
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
            <h1 className="text-4xl font-bold mb-4">Långtids / korttidsuthyrning i Norrköping</h1>
            <p className="text-gray-600 text-lg">
              Oavsett om du behöver en bostad för en kortare period eller under längre tid i Norrköping, har vi flexibla lösningar som passar dig.
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
                kvm={apartment.kvm}
                image={apartment.image}
                onClick={() => handleApartmentClick(apartment)}
              />
            ))}
          </div>
          
          <div className="mt-12 mb-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Långtids- och korttidsuthyrning i Norrköping</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                    Vi erbjuder både korttidsuthyrning och långsiktiga hyresavtal i Norrköping. På så sätt kan vi anpassa boendet efter just dina behov.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Våra två alternativ:</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Långtidsuthyrning – stabilt och tryggt för dig som söker ett hem under längre tid</li>
                    <li>• Korttidsboende – perfekt för tillfälliga projekt, studier eller arbete i Norrköping</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Oavsett om du planerar att bo i Norrköping i några månader eller flera år kan vi erbjuda en bostad som passar.
                  </p>
                </div>
              </div>
              <div className="w-2/3 mx-auto overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/WhatsApp Image 2025-11-12 at 14.26.00_cf360d4b.jpg"
                  alt="Building exterior"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Om Långtids / korttidsuthyrning uthyrning</h2>
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
                  <li>• Inflyttningsdatum/behov</li>
                  <li>• Arbetsgivarintyg eller studieintyg</li>
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

export default Langtids;
