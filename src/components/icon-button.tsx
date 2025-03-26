import React from "react";

type Props = {
  size?: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
const IconButton = ({ size = 30, children, onClick, className }: Props) => {
  return (
    <button
      className={`w-[${size}px] h-[${size}px] ${className} rounded-full flex justify-center items-center transition-all duration-500 bg-[var(--foreground)] text-[var(--text)] p-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
