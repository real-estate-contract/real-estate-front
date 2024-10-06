import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button } from '..'; // Assuming you're correctly importing these from your local project setup

function Header({ onBackButtonClick }) {
    const navigate = useNavigate();

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      
    const handleButtonClick = () => {
        const token = getCookie("token"); // Get the token from localStorage
        if (token) {
            navigate('/main'); // Navigate only if the token exists
        } else {
            alert('You are not logged in. Please log in to continue.'); // Inform the user if the token is missing
        }
    };

    return (
        <>
            <Grid theme='header_'>
                <Button
                    theme='headerTitle'
                    children='budong'
                    onClick={handleButtonClick}
                    style={buttonStyle}
                />
            </Grid>
        </>
    );
}

const buttonStyle = {
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
};

export default Header;
