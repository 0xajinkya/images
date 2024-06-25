import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    headLine: React.CSSProperties;
    semiBold: React.CSSProperties;
    normal: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    headLine?: React.CSSProperties;
    semiBold?: React.CSSProperties;
    normal?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headLine: true;
    semiBold: true;
    normal: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    headLine: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "38px",
    },
    semiBold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    normal: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
    },
  },
});
