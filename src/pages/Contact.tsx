
import SimpleNavigation from "@/components/SimpleNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Meddelande skickat!",
        description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Fel",
        description: "Något gick fel när meddelandet skickades. Försök igen.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SimpleNavigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-8">Kontakta Oss</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Skicka oss ett meddelande</h2>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ditt Namn" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Din E-post" 
                      required 
                    />
                  </div>
                  <div>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Ämne" 
                      required 
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ditt Meddelande" 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Skickar..." : "Skicka Meddelande"}
                  </Button>
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
          <Card className="mt-8">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Ansökningsprocess:</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Snabbare handläggning om ni anger:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Budget</li>
                    <li>Inflyttningsdatum/behov</li>
                    <li>Arbetsgivarintyg eller studieintyg</li>
                    <li>Önskad bostadsstorlek</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Företagsuthyrning (lokaler/boende):</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Minimum 10 dagars hyresperiod</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
