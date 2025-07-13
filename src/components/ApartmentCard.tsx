
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ApartmentCardProps {
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  onClick?: () => void;
}

const ApartmentCard = ({ title, price, beds, baths, sqft, image, onClick }: ApartmentCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold text-blue-500 mt-2">{price}</p>
        <div className="flex justify-between mt-2 text-gray-600">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft} sqft</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
