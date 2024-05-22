import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "../Text/Text";
import { MouseEvent, ReactNode, useRef } from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  textVariant?: ThemeTypographyVariants;
  children: ReactNode;
  styleSheet?: StyleSheet;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  textVariant,
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const ref = useRef();
  const router = useRouter();
  const isLink = href && href.startsWith("http" || "https");
  const Tag = isLink ? "a" : "button";
  useRipple(ref, {
    animationLength: 300,
    rippleColor: "rgba(255, 255, 255, 0.7)",
  });

  return (
    <StyledButton
      tag={Tag}
      {...props}
      ref={ref}
      href={href}
      styleSheet={{
        border: "0",
        backgroundColor: "transparent",
        color: "inherit",
        outline: "0",
        cursor: "pointer",
        textDecoration: "none",
        ...styleSheet,
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
    >
      {children}
    </StyledButton>
  );
}
