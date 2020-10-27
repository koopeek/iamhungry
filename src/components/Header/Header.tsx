import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>
                I AM HUNGRY LOGO
            </h1>
        </header>
    );
}

Header.displayName = 'Header';