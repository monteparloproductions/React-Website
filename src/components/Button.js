import React from 'react';

function Button() {
    const handleButtonClick = () => {
        
        const name = prompt("What is your name?");
        const email = prompt("What is your email?");
        
        
        if (name && email) {
            
            alert(`Hi ${name}! Welcome to Broward College! We will be in touch with you soon!`);
        } else {
            
            alert("Please provide both your name and email.");
        }
    };

    return (
        <div id="cta">
            <button id="button" onClick={handleButtonClick}>
                JOIN US!
            </button>
        </div>
    );
}

export default Button;
