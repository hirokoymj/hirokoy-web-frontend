import React, { FC } from 'react';
import { FormControl, MenuItem, FormHelperText, TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface DropdownOption {
  label: string;
  value: string | number;
}

interface FormInputDropdownProps {
  name: string;
  label: string;
  options: DropdownOption[];
  disabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FormInputDropdown: FC<FormInputDropdownProps> = ({ name, label, options, disabled, handleChange }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl error={errors && !!errors[name]} fullWidth>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={label}
            onChange={(e) => {
              field.onChange(e);
              handleChange && handleChange(e);
            }}
            value={field.value}
            //labelId={name}
            variant="outlined"
            disabled={disabled}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
        control={control}
        name={name}
      />
      <FormHelperText>{errors && (errors[name]?.message as string)}</FormHelperText>
    </FormControl>
  );
};
