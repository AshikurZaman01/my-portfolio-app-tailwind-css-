// Logo.js

import React from 'react';

const Logo = () => {
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to top, #3498db, #1abc9c)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold',
        display: 'inline-block',
    };

    return (
        <div>
            <h1 style={gradientStyle}>Ashiks Portfolio</h1>
        </div>
    );
};

export default Logo;
