import { Input } from "./ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
}

export const FormField = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  helperText,
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className="h-[56px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary-green"
      />
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
};

