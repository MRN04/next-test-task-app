"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { User } from "@/services/types";

export const SettingsForm = () => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  const handleSave = () => {
    if (user) {
      const updatedUser = {...user};
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
    else {
      const newUser = { 
        username: "",
        email: "",
        password: "",
      };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
    }
    document.location.reload();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-dark-text">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter name"
            value={user?.username || ""}
            onChange={(e) => setUser({ ...user, username: e.target.value } as User)}
            className="h-11 px-4 border-gray-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-dark-text">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value } as User)}
            className="h-11 px-4 border-gray-200"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-dark-text">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value } as User)}
            className="h-11 px-4 border-gray-200"
          />
          <p className="text-xs text-gray-text">
            Your password is between 4 and 12 characters
          </p>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            onClick={handleSave}
            className="w-full max-w-[130px] lg:max-w-[272px] h-11 bg-primary-green hover:bg-primary-green/90 text-white"
          >
            Save
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("user");
              document.location.reload();
            }}
            className="w-full max-w-[130px] lg:max-w-[272px] h-11 lg:hidden bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

