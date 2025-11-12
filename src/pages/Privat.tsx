import React, { useState } from "react";
import { Link } from "react-router-dom";
import SimpleNavigation from "@/components/SimpleNavigation";
import ApartmentCard from "@/components/ApartmentCard";
import ApartmentModal from "@/components/ApartmentModal";

const Privat = () => {
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const privateApartments = [
    {
      title: "2 rok 68 kvm vinsvåning eneby",
      price: "7,200 kr/månad",
      beds: 1,
      baths: 1,
      kvm: 68,
      image: "/images/WhatsApp Image 2025-10-11 at 23.32.04_d605986b.jpg",
      images: [
        "/images/WhatsApp Image 2025-10-11 at 23.32.04_d605986b.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.04_9dbb8874.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.04_12c2fd56.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.04_c6e41f11.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.05_3911a210.jpg"
        
  ]
    },
    {
      title: "2 rok 35 kvm med balkong",
      price: "6948 kr/månad", 
      beds: 1,
      baths: 1,
      kvm: 35,
      image: "/images/WhatsApp Image 2025-10-11 at 23.32.04_d962ac04.jpg",
      images: [
        "/images/WhatsApp Image 2025-10-11 at 23.32.04_d962ac04.jpg",
        "/images/WhatsApp Image 2025-11-04 at 21.10.41_b2154c07.jpg",
        "/images/WhatsApp Image 2025-11-04 at 21.10.41_eea3dab7.jpg"
       
      ]
    },
    {
      title: "1rok 26kvm i haga",
      price: "4786 kr/månad",
      beds: 1,
      baths: 1,
      kvm: 26,
      image: "/images/WhatsApp Image 2025-10-11 at 23.32.05_61bebbc7.jpg",
      images: [
        "/images/WhatsApp Image 2025-10-11 at 23.32.05_61bebbc7.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.05_3a921809.jpg",
        "/images/WhatsApp Image 2025-10-11 at 23.32.05_f50f626a.jpg"
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
            <h1 className="text-4xl font-bold mb-4">Lediga lägenheter i Norrköping</h1>
            <p className="text-gray-600 text-lg">
            KM3 Förvaltning hyr ut lägenheter i Norrköping till privatpersoner. Här hittar du lediga lägenheter för dig som vill bo tryggt, bekvämt och långsiktigt. Våra bostäder finns i flera områden – både centralt och i lugna kvarter.Alla lägenheter har eget kök, badrum och snabbt internet. Vi erbjuder bostäder i olika storlekar, från ettor till familjelägenheter.
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
                <h2 className="text-3xl font-bold mb-6">Våra lägenheter i Norrköping</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6">
                  Letar du efter en lägenhet i Norrköping? Hos oss hittar du välplanerade och bekväma hem med närhet till service, grönområden och kommunikationer. Oavsett om du vill bo mitt i stan eller i ett lugnare område hjälper vi dig att hitta en lägenhet som passar din livsstil.
                  </p>
                  
                  {/*<h3 className="text-xl font-semibold mb-4">När du hyr en lägenhet hos oss får du alltid:</h3>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    <li>• Egen bostad med kök, badrum och vardagsrum</li>
                    <li>• En lugn och trygg boendemiljö</li>
                    <li>• Flexibla alternativ som passar studenter, yrkesarbetande och familjer</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Oavsett om du behöver en mindre lägenhet för studier eller en större bostad för hela familjen, 
                    har vi alternativ som matchar dina behov. Våra lägenheter i Norrköping är välbelägna med närhet 
                    till service, grönområden och bra kommunikationer – perfekt för att skapa en vardag som passar just dig.
                  </p>*/}
                </div>
              </div>
              <div className="w-3/3 mx-auto overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="\images\nova-Hagagatan-31-A.png"
                  alt="Building exterior"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Om privat uthyrning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Vad som finns:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Kök och badrum</li>
                  <li>• Höghastighetsinternet</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Krav för hyra</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Verifiering av månadsinkomst</li>
                  <li>• Depositionsavgift krävs</li>
                  <li>• Referenser krävs</li>
                  <li>• Inga betalningsanmärkningar accepteras</li>
                  <li>• Eventuell borgensman kan godkännas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Redo att hitta ditt nya hem?</h2>
            <p className="text-lg mb-6 opacity-90">
              Kontakta oss idag för att diskutera dina behov och hitta den perfekta lägenheten för dig.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-medium rounded-md hover:bg-background/90 transition-colors"
            >
              Kontakta oss nu
            </Link>
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
