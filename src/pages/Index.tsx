
import ApartmentCard from "@/components/ApartmentCard";
import Navigation from "@/components/Navigation";

const apartmentsData = [
  {
    id: 1,
    title: "Luxury Downtown Loft",
    price: "$2,500/month",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    id: 2,
    title: "Modern City View Apartment",
    price: "$3,200/month",
    beds: 3,
    baths: 2,
    sqft: 1500,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Available Apartments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartmentsData.map((apartment) => (
            <ApartmentCard key={apartment.id} {...apartment} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
