"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Settings, User2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { User } from "@/services/types";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

export function SideBar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [pathname]);
  
  return (
    <Sidebar className="border-none flex gap-10 pt-[55px] pb-[37px] pl-[28px] static">
      <SidebarHeader className="p-0">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
            <span className="text-sm font-semibold text-white">T</span>
          </div>
          <span className="text-xl font-semibold">TESTAPP</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-0">
        {sidebarItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton 
              className={cn("w-full justify-start gap-3 text-gray-text hover:text-gray-text active:text-primary-green", isActive(item.href) && "text-primary-green hover:text-primary-green")}
              onClick={() => router.push(item.href)}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-0">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
            <User2 className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-xs font-medium">{user?.username ?? "New User"}</span>
            <span className="text-xs md:text-[10px] text-gray-text">
              {user?.email ?? "newuser@example.com"}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
