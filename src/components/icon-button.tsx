import React from "react";

type Props = {
  size?: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const IconButton = ({ size, children, onClick, className }: Props) => {
  return (
    <button
      className={`w-[${size || 40}px] h-[${size || 40}px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
