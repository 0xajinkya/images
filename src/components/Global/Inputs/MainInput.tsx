import { Box, Icon, InputBase } from "@mui/material";
import { useState } from "react";

export const MainInput = ({
  placeholder,
  required = false,
  icon,
  type = "text",
  fieldName,
  handleChange,
  value
}: {
  placeholder: string;
  fieldName: string;
  value: string;
  required?: boolean;
  icon?: JSX.Element;
  type?: string;
  handleChange: (key: string, value: string) => void;
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <InputBase
        sx={{
          borderBottom: !focused ? "1px solid #D2D2D2" : "1px solid #271F30",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          width: "100%",
          py: "12px",
          pl: "12px",
          borderRadius: "14px",
        }}
        name={fieldName}
        endAdornment={
          icon && (
            <Icon
              sx={{
                mr: "12px",
                color: !focused ? "rgba(0, 0, 0, 0.6)" : "#271F30",
              }}
            >
              {icon}
            </Icon>
          )
        }
        value={value}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </Box>
  );
};
