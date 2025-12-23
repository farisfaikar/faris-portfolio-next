"use client"
import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import 'react-awesome-button/dist/styles.css';

interface HireMeButtonProps {
  targetText: string,
}

const HireMeButton: React.FC<HireMeButtonProps> = ({ targetText}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <AwesomeButton
      type="primary"
      size="medium"
      style={{
        '--button-default-height': '48px',
        '--button-default-font-size': '14px',
        '--button-default-border-radius': '6px',
        '--button-horizontal-padding': '20px',
        '--button-raise-level': '5px',
        '--button-hover-pressure': '2',
        '--transform-speed': '.185s',
        '--button-primary-color': isDarkMode ? '#08090A' : '#ffffff',
        '--button-primary-color-dark': isDarkMode ? '#ffffff' : '#08090A',
        '--button-primary-color-light': isDarkMode ? '#ffffff' : '#08090A',
        '--button-primary-color-hover': isDarkMode ? '#08090A' : '#ffffff',
        '--button-primary-color-active': isDarkMode ? '#08090A' : '#ffffff',
        '--button-primary-border': isDarkMode ? '1px solid #ffffff' : '1px solid #08090A',
        '--button-secondary-color': '#ffffff',
        '--button-secondary-color-dark': '#08090A',
        '--button-secondary-color-light': '#08090A',
        '--button-secondary-color-hover': '#ffffff',
        '--button-secondary-color-active': '#ffffff',
        '--button-secondary-border': '1px solid #08090A',
        '--button-anchor-color': '#475472',
        '--button-anchor-color-dark': '#2a3143',
        '--button-anchor-color-light': '#d4d9e4',
        '--button-anchor-color-hover': '#424e6a',
        '--button-anchor-color-active': '#cccccc',
        '--button-anchor-border': '0px solid transparent',
        '--button-medium-width': isSmallScreen ? '100%' : '136px',
      } as React.CSSProperties}
    >
      <span>{targetText}</span>
    </AwesomeButton>
  )
}

export default HireMeButton