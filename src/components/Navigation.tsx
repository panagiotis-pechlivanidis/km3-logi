
import { Building2, Home, Building, Users, Briefcase, MapPin, Calendar, Sofa } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const apartmentCategories = [
  {
    title: "Privat",
    url: "/private",
    icon: Home,
  },
  {
    title: "Företag",
    url: "/business",
    icon: Briefcase,
  },
  {
    title: "Möblerad",
    url: "/furnished",
    icon: Sofa,
  },
  {
    title: "Omöblerad",
    url: "/unfurnished",
    icon: Building,
  },
  {
    title: "Långtids / Korttids",
    url: "/rental-terms",
    icon: Calendar,
  },
];

const Navigation = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center p-2">
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div className="ml-2">
              <div className="text-sm font-semibold">UTHYRNING AV LÄGENHETER</div>
              <div className="text-xs text-gray-600">Norrköping</div>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>LÄGENHETER</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {apartmentCategories.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 border-t">
          <div className="text-sm font-semibold mb-2">KM3 Logi AB</div>
          <div className="text-xs text-gray-600 flex items-start">
            <MapPin className="h-3 w-3 mt-0.5 mr-1 flex-shrink-0" />
            <div>
              <div>Koppargatan 3</div>
              <div>Norrköping</div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default Navigation;
