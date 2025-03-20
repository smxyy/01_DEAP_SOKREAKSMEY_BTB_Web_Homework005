"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar"

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Setting2 } from 'iconsax-react';
import {items} from "@/lib/sidebar-data";

export default function AppSidebar() {

  const path = usePathname();

  return(
    <Sidebar>
      <SidebarContent className="pt-7 text-[var(--base)]">
        <div className="w-full flex flex-col items-center">
          <Avatar className="w-40 h-40 mb-2">
            <AvatarImage  src="/images/profile.jpg" />
            <AvatarFallback>My Profile Picture</AvatarFallback>
          </Avatar>
          <h2>Hermione Granger</h2>
          <p className="text-sm text-[var(--primary)]">hermionegr@gmail.com</p>
        </div>
        <SidebarGroup className="mt-3">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col w-full justify-center items-center">
              <div>
              {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className={`hover:bg-gray-200 px-3 ${path === item.url ? "bg-[#ecf0f8] text-[var(--primary)]": "bg-none"}`}>
                      <Link href={item.url}>
                        <item.icon color="var(--secondary)"  variant="Outline" size={54}/>
                        <span className={`pl-1 ${item.url ? "hover:font-medium" : ""} ${path === item.url ? "font-[400]": ""} text-[var(--base)]`}>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-10">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Setting2 color="var(--base)" variant="Outline" size={54} />
                    <span className="pl-1">Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}