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
      style={{
        '--button-default-height': '48px',
        '--button-default-font-size': '14px',
        '--button-default-border-radius': '6px',
        '--button-horizontal-padding': '20px',
        '--button-raise-level': '5px',
        '--button-hover-pressure': '2',
        '--transform-speed': '.185s',
        '--button-primary-color': '#a9d3e9',
        '--button-primary-color-dark': '#58a9d4',
        '--button-primary-color-light': '#2e84b2',
        '--button-primary-color-hover': '#95c9e4',
        '--button-primary-border': 'none',
        '--button-secondary-color': '#fafafa',
        '--button-secondary-color-dark': '#67cbc3',
        '--button-secondary-color-light': '#349890',
        '--button-secondary-color-hover': '#ecf9f8',
        '--button-secondary-border': '2px solid #b3e5e1',
        '--button-anchor-color': '#95d44a',
        '--button-anchor-color-dark': '#52a934',
        '--button-anchor-color-light': '#3f8228',
        '--button-anchor-color-hover': '#89cf35',
        '--button-anchor-border': '2px solid #5bbd3a',
      }}
    >
      <span>{targetText}</span>
    </AwesomeButton>
  )
}

export default HireMeButton
