import { ReactNode, forwardRef } from "react";
import NextLink from "next/link";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: "primary" | "accent" | "success" | "warning" | "negative";
  colorVariantEnable?: boolean;
}

const Link = forwardRef(
  (
    {
      href,
      colorVariant,
      variant,
      children,
      styleSheet,
      colorVariantEnable,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const isExternalLink = href.startsWith("http" || "https");

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      tag: "a",
      ref,
      href,
      children,
      styleSheet: {
        textDecoration: "none",
        ...(colorVariantEnable && {
          color: currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnable && {
            color: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnable && {
            color: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    if (isExternalLink)
      return (
        <Text
          {...{
            target: "_blank",
            ...linkProps,
          }}
        />
      );

    return (
      <NextLink href={href} passHref>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: "primary",
  colorVariantEnable: true,
};

export default Link;
