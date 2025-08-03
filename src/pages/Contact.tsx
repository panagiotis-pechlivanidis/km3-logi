
import TopNavigation from "@/components/TopNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <TopNavigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-8">Kontakta Oss</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Skicka oss ett meddelande</h2>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ditt Namn" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Din E-post" />
                  </div>
                  <div>
                    <Input placeholder="Ämne" />
                  </div>
                  <div>
                    <Textarea placeholder="Ditt Meddelande" className="min-h-[150px]" />
                  </div>
                  <Button className="w-full">Skicka Meddelande</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Kontaktuppgifter</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Vår adress</h3>
                    <p className="text-gray-600">
                      Koppargatan 3, 602 23 Norrköping
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Maila oss</h3>
                    <p className="text-gray-600">
                      caroline@km3logi.se
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ring oss</h3>
                    <p className="text-gray-600">
                      073-812 23 33
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
