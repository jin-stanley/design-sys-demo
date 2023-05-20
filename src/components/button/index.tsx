import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "large" | "small";
  color?: "primary";
  brand?: "woolworths" | "everyday-rewards";
  overrides?: { [key: string]: string | number };
  children: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  fullWidth = false,
  size = "small",
  color = "primary",
  brand,
  overrides,
  children,
}) => {
  // button only has two sizes for now and we will setup different css names for each size
  const buttonSize = `button-${size}`;

  // button only has two brands and one color --- primary for now,
  // so we will setup primary css name for each brands
  const buttonColor = disabled ? "button-disabled" : `button-${brand}-${color}`;

  // check if button is full size
  const buttonFullWidth = fullWidth ? "button-full" : "";

  const buttonOverrides =
    !disabled && overrides && Object.keys(overrides).length && !brand
      ? "button-customize"
      : "";

  // all classNames
  const buttonClassName = `button ${buttonSize} ${buttonColor} ${buttonFullWidth} ${buttonOverrides}`;

  console.log('🌟 ----> buttonClassName:', buttonClassName)
  return (
    <button
      disabled={disabled}
      className={`${buttonClassName}`}
      // Here if we need to override element by style we can do it here,
      // it support style name and css variable names.
      style={!disabled ? { ...overrides } : undefined}
      aria-label={`${brand}-${color}-button`}
      // onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps };
