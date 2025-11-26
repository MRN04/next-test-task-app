"use client";

import { useState, useEffect } from "react";
import { User } from "@/services/types";
import { Button } from "./ui/button";

export function SettingsSideBar() {
  const [user, setUser] = useState<User | null>(null);
  const [profileCompletion, setProfileCompletion] = useState<number>(0);

  const calculateProfileCompletion = (user: User | null) => {
    if (!user) return 0;
    
    const fields = [
      user.username,
      user.email,
      user.password,
    ];
    
    const filledFields = fields.filter(field => field && field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    document.location.reload();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const profileCompletion = calculateProfileCompletion(storedUser ? JSON.parse(storedUser) : null);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setProfileCompletion(profileCompletion);
    }
  }, []);

  const getInitials = (username: string) => {
    return username
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-full max-w-[312px] bg-white border-l border-gray-100 hidden lg:flex flex-col justify-between pt-10 px-5 pb-6 h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-dark-text">My Profile</h2>
          <p className="text-sm text-primary-green cursor-pointer hover:underline">
            {profileCompletion === 0 ? "not completed your profile" : `${profileCompletion}% completed your profile`}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-primary-green/20">
            <span className="text-2xl font-semibold text-gray-400">
              {user?.username ? getInitials(user.username) : "NU"}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className="text-base font-medium text-dark-text">
              {user?.username || "New User"}
            </h3>
            <p className="text-sm text-gray-text pb-2.5 px-8 border-b border-[#f5f6fa]">
              Developer at White Digital
            </p>
          </div>
        </div>
      </div>

      <Button
        onClick={handleLogout}
        className="w-full h-11 bg-red-500 hover:bg-red-600 text-white"
      >
        Logout
      </Button>
    </div>
  );
}
