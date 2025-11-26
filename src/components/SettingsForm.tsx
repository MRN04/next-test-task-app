"use client";

import { useState, useEffect } from "react";
import { User } from "@/services/types";
import { Button } from "./ui/button";
import { FormField } from "./FormField";
import {
  ValidationErrors,
  validateForm,
  hasErrors,
} from "@/lib/settingsFormValidation";

export const SettingsForm = () => {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const loadUserFromStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  };

  const updateUser = (field: keyof User, value: string) => {
    setUser({ ...user, [field]: value } as User);
    clearFieldError(field as keyof ValidationErrors);
  };

  const clearFieldError = (field: keyof ValidationErrors) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSave = () => {
    const validationErrors = validateForm(user);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    saveUserToStorage();
  };

  const saveUserToStorage = () => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      document.location.reload();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    document.location.reload();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <FormField
          id="name"
          label="Name"
          type="text"
          placeholder="Enter name"
          value={user?.username || ""}
          onChange={(value) => updateUser("username", value)}
          error={errors.username}
        />

        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          value={user?.email || ""}
          onChange={(value) => updateUser("email", value)}
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          value={user?.password || ""}
          onChange={(value) => updateUser("password", value)}
          error={errors.password}
          helperText="Password must be at least 6 characters"
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={handleSave}
            className="w-full max-w-[130px] lg:max-w-[272px] bg-primary-green hover:bg-primary-green/90 text-white"
          >
            Save
          </Button>
          <Button
            onClick={handleLogout}
            variant="destructive"
            disabled={!user?.username || !user?.email || !user?.password}
            className="w-full max-w-[130px] lg:max-w-[272px] lg:hidden"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
