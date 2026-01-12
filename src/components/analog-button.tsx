import React from 'react';

interface AnalogButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnalogButton({ 
  children, 
  className,
}: AnalogButtonProps) {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/farisfaikar", "_blank")
  }
  
  return (
    <button
      onClick={goToLinkedin}
      className={`group relative cursor-pointer outline-none active:outline-none w-full sm:w-auto ${className}`}
    >
      <span className="absolute top-0 left-0 h-full w-full rounded-lg transform translate-y-1 bg-neutral-950 dark:bg-neutral-50" />
      
      <span className="absolute top-0 left-0 h-full w-full rounded-lg transform translate-y-0.5 bg-neutral-950 dark:bg-neutral-50" />

      <span className="
        relative block px-6 py-2 rounded-lg font-bold text-lg
        transition-transform duration-75 transform -translate-y-0.5
        group-hover:translate-y-0
        group-active:translate-y-0.5
        border
        text-neutral-950
        bg-neutral-50
        border-neutral-950
        dark:text-neutral-50
        dark:bg-neutral-950
        dark:border-neutral-50
      ">
        {children}
      </span>
    </button>
  );
};
