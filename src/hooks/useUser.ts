"use client";

import { useState, useEffect, useCallback } from "react";
import { User } from "@/services/types";

const USER_STORAGE_KEY = "user";

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const saveUser = useCallback((userData: User) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
    document.location.reload();
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(USER_STORAGE_KEY);
    document.location.reload();
  }, []);

  return {
    user,
    saveUser,
    logout,
  };
};
