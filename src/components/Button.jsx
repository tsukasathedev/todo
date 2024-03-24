import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/useTheme';

const Button = () => {

    const theme = useContext(ThemeContext)

    return (
        <div>
            <button>{theme}</button>
        </div>
    );
};

export default Button;