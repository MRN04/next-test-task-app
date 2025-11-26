import { User } from "@/services/types";

export interface ValidationErrors {
  username?: string;
  password?: string;
}

const MIN_USERNAME_LENGTH = 4;
const MIN_PASSWORD_LENGTH = 6;

export const validateUsername = (username?: string): string | undefined => {
  if (!username || username.trim() === "") {
    return "Username is required";
  }

  if (username.trim().length < MIN_USERNAME_LENGTH) {
    return `Username must be at least ${MIN_USERNAME_LENGTH} characters`;
  }

  return undefined;
};

export const validatePassword = (password?: string): string | undefined => {
  if (!password || password.trim() === "") {
    return "Password is required";
  }

  if (password.trim().length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }

  return undefined;
};

export const validateForm = (user: User | null): ValidationErrors => {
  const errors: ValidationErrors = {};

  const usernameError = validateUsername(user?.username);
  if (usernameError) {
    errors.username = usernameError;
  }

  const passwordError = validatePassword(user?.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
