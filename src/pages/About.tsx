
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">About Haven Homes</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-700 mb-6">
            Haven Homes is your trusted partner in finding the perfect apartment. With years of experience
            in the real estate market, we specialize in connecting people with their dream homes.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team of experienced professionals is dedicated to providing exceptional service and
            ensuring that your apartment hunting experience is smooth and successful.
          </p>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">We maintain high standards in all our listings</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">Honest and transparent in every interaction</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Service</h3>
                <p className="text-gray-600">Dedicated to exceptional customer experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
