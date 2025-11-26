"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const MobileHeader = () => {
    return (
        <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white border-b border-gray-100">
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
                    <span className="text-sm font-semibold text-white">T</span>
                </div>
                <span className="text-xl font-semibold">TESTAPP</span>
            </div>
            <SidebarTrigger className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-md">
                <Menu className="w-5 h-5" />
            </SidebarTrigger>
        </div>
    );
};

