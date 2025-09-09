import { BellRing, HomeIcon, Library, Receipt, Settings } from "lucide-react";

export const MenuItems = (
  workspaceId: string
): { title: string; href: string; icon: React.ReactNode }[] => [
  { title: "Home", href: `/dashboard/${workspaceId}/home`, icon: <HomeIcon /> },
  { title: "My Library", href: `/dashboard/${workspaceId}`, icon: <Library /> },
  {
    title: "Notifications",
    href: `/dashboard/${workspaceId}/notifications`,
    icon: <BellRing />,
  },
  {
    title: "Billing",
    href: `/dashboard/${workspaceId}/billing`,
    icon: <Receipt />,
  },
  {
    title: "Settings",
    href: `/dashboard/${workspaceId}/settings`,
    icon: <Settings />,
  },
];
