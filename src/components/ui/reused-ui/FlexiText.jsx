import React from 'react';
import FlexiAstro from '../../../assets/All Flexi Poses/SVG/Flexi_Astro.svg';
import '../reused-animations/fade.css';

export function FlexiText({ 
    children, 
    className, 
    flexiImage = FlexiAstro,
    flexiAlt = "Flexi Astro",
    showBubble = true,
    bubbleClassName = "",
    containerClassName = "",
    zIndex = 3,
    ...props 
}) {
    return (
        <>
            <style>
                {`
                    .flexi-astro-bottom-left {
                        position: absolute;
                        left: 0.4rem;
                        bottom: 0.4rem;
                        width: 70px;
                        height: auto;
                        z-index: 2;
                        pointer-events: none;
                    }
                    
                    .flexi-bubble-container {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        display: flex;
                        align-items: flex-end;
                    }
                    
                    .speech-bubble {
                        position: relative;
                        margin-left: 5rem;
                        margin-bottom: 70px;
                        background: #fff;
                        border-radius: 18px;
                        padding: 7px 13px;
                        font-size: 0.95rem;
                        color: #222;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                        min-width: 160px;
                        max-width: 220px;
                    }
                    
                    .speech-bubble:after {
                        content: '';
                        position: absolute;
                        left: -8px;
                        bottom: -7px;
                        width: 0;
                        height: 0;
                        border-top: 12px solid transparent;
                        border-bottom: 12px solid transparent;
                        border-right: 18px solid #fff;
                        filter: drop-shadow(-5px 2px 2px rgba(0,0,0,0.08));
                        transform: rotate(-34deg);
                    }
                `}
            </style>
            
            <div 
                className={`flexi-bubble-container ${containerClassName} ${className || ''}`} 
                style={{ zIndex }}
                {...props}
            >
                <img 
                    src={flexiImage} 
                    alt={flexiAlt} 
                    className="flexi-astro-bottom-left" 
                />
                {showBubble && (
                    <div className={`speech-bubble ${bubbleClassName}`}>
                        {children}
                    </div>
                )}
            </div>
        </>
    );
}
