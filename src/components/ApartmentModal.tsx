
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ApartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  apartment: {
    title: string;
    price: string;
    beds: number;
    baths: number;
    kvm: number;
    images: string[];
  } | null;
}

const ApartmentModal = ({ isOpen, onClose, apartment }: ApartmentModalProps) => {
  if (!apartment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{apartment.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {apartment.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image}
                        alt={`${apartment.title} - Image ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Apartment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Property Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-blue-500">{apartment.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span>{apartment.beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span>{apartment.baths}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area:</span>
                  <span>{apartment.kvm} kvm</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Fully equipped kitchen</li>
                <li>• High-speed internet</li>
                <li>• Utilities included</li>
                <li>• 24/7 maintenance support</li>
                <li>• Modern appliances</li>
                <li>• Secure building access</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApartmentModal;
