"use client";

import { useMemo } from "react";
import { useUser } from "@/hooks/useUser";
import { calculateProfileCompletion, getInitials } from "@/lib/utils";
import { Button } from "./ui/button";

export function SettingsSideBar() {
  const { user, logout } = useUser();

  const profileCompletion = useMemo(() => {
    if (!user) return 0;
    return calculateProfileCompletion([user.username, user.email, user.password]);
  }, [user]);

  return (
    <div className="w-full max-w-[312px] bg-white border-l border-gray-100 hidden lg:flex flex-col justify-between pt-10 px-5 pb-6 h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-dark-text">My Profile</h2>
          <p className="text-sm text-primary-green cursor-pointer hover:underline">
            {profileCompletion === 0
              ? "not completed your profile"
              : `${profileCompletion}% completed your profile`}
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
        onClick={logout}
        className="w-full h-11 bg-red-500 hover:bg-red-600 text-white"
        disabled={!user?.username || !user?.email || !user?.password}
      >
        Logout
      </Button>
    </div>
  );
}
