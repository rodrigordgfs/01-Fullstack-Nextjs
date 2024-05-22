import { ReactNode } from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize
}

export default function Button({
  children,
  styleSheet,
  fullWidth,
  colorVariant,
  variant,
  size,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size]
        ...(fullWidth && {
          alignSelf: "initial",
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "contained",
  colorVariant: "primary",
  size: "md",
};

Button.Base = ButtonBase;
