import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  bgOpacity?: string;
  rounded?: string;
}

export enum roundedEnum {
  sm = "2px",
  md = "4px",
  lg = "6px",
  full = "100%",
}

export enum colorSet {
  light = "white",
  drak = "black",
  main = "green",
}

const Button: React.FC<Props> = ({
  children,
  paddingX,
  paddingY,
  bgColor,
  bgOpacity,
  rounded,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor,
        opacity: bgOpacity,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: rounded,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
