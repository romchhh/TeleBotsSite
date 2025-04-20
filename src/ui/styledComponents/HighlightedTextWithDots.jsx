import React from 'react';
import './HighlightedTextWithDots.css';

const HighlightedTextWithDots = ({ children, colorText, colorBackground, colorDots, widthDots, widthBorder }) => {
  return (
    <div 
      className="highlighted-text-with-dots"
      style={{
        '--color-text': colorText,
        '--color-background': colorBackground,
        '--color-dots': colorDots,
        '--width-dots': `${widthDots}px`,
        '--width-border': `${widthBorder}px`
      }}
    >
      {children}
    </div>
  );
};

export default HighlightedTextWithDots; 