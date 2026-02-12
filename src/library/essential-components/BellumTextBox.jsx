import { Input, Field } from "@chakra-ui/react";

export const BellumTextBox = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  helperText 
}) => {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <Input 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
      {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
    </Field.Root>
  );
};