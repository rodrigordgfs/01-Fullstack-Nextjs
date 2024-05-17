import { ReactNode } from "react";
interface StyleSheet {
  fontFamily: string;
}

interface BoxProps {
  tag: any;
  children: ReactNode;
  stylesheet: StyleSheet;
}

export default function Box({ children, stylesheet, tag }: BoxProps) {
  const Tag = tag || "div";

  return <Tag style={stylesheet}>{children}</Tag>;
}
