import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  pulse = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 focus:outline-none rounded-lg text-lg py-4 px-8";
  
  const variants = {
    primary: "bg-brand-green hover:bg-brand-greenHover text-white shadow-lg shadow-brand-green/30",
    secondary: "bg-white text-brand-dark hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "w-full md:w-auto";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;