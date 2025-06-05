
import { Building2, Home, Info, Mail } from "lucide-react";
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
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Apartments",
    url: "/",
    icon: Home,
  },
  {
    title: "About Us",
    url: "/about",
    icon: Info,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Mail,
  },
];

const Navigation = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center p-2">
          <Link to="/" className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-semibold">Haven Homes</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
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
    </Sidebar>
  );
};

export default Navigation;
