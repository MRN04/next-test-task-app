"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { User } from "@/services/types";
import { useUser } from "@/hooks/useUser";
import { Button } from "./ui/button";
import { FormField } from "./FormField";

export const SettingsForm = () => {
  const { user, saveUser, logout } = useUser();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  return (
    <form onSubmit={handleSubmit(saveUser)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <FormField
          id="username"
          label="Name"
          type="text"
          placeholder="Enter name"
          error={errors.username?.message}
          registration={register("username", {
            required: "Username is required",
            minLength: {
              value: 4,
              message: `Username must be at least 4 characters`,
            },
          })}
        />

        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          registration={register("email")}
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
          helperText="Password must be at least 6 characters"
          registration={register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: `Password must be at least 6 characters`,
            },
          })}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            className="w-full max-w-[130px] lg:max-w-[272px] bg-primary-green hover:bg-primary-green/90 text-white"
          >
            Save
          </Button>
          <Button
            type="button"
            onClick={logout}
            variant="destructive"
            disabled={!username || !email || !password}
            className="w-full max-w-[130px] lg:max-w-[272px] lg:hidden"
          >
            Logout
          </Button>
        </div>
      </div>
    </form>
  );
};
