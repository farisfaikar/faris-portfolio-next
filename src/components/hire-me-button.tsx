"use client"

import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import 'react-awesome-button/dist/styles.css';

interface HireMeButtonProps {
  targetText: string
}

const HireMeButton: React.FC<HireMeButtonProps> = ({ targetText }) => {
  return (
    <AwesomeButton
      type="primary"
      size="medium"
      className="w-full"
      style={{
        '--button-default-height': '48px',
        '--button-default-font-size': '14px',
        '--button-default-border-radius': '6px',
        '--button-horizontal-padding': '20px',
        '--button-raise-level': '5px',
        '--button-hover-pressure': '2',
        '--transform-speed': '.185s',
        '--button-primary-color': '#08090A',
        '--button-primary-color-dark': '#ffffff',
        '--button-primary-color-light': '#ffffff',
        '--button-primary-color-hover': '#08090A',
        '--button-primary-color-active': '#08090A',
        '--button-primary-border': '1px solid #ffffff',
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
      }}
    >
      <span>{targetText}</span>
    </AwesomeButton>
  )
}

export default HireMeButton
