import { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "./ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  helperText?: string;
  registration: UseFormRegisterReturn;
}

export const FormField = ({
  id,
  label,
  type,
  placeholder,
  error,
  helperText,
  registration,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className="h-[56px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary-green"
        {...registration}
      />
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
};
