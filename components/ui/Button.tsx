import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  // Changed rounded-lg to rounded-full for the soft Cereen look
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Soft Mint/Green Primary
    primary: "bg-primary-300 text-primary-900 hover:bg-primary-400 shadow-lg shadow-primary-300/30 border border-transparent",
    secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 border border-transparent",
    outline: "bg-transparent text-gray-700 border border-gray-200 hover:border-gray-900 hover:bg-gray-50",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    white: "bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ChevronRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;