import React, {createContext,useState,useContext, Children} from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [colorScheme,setColorScheme] = useState('light');

    const toggleColorScheme = () => {
        setColorScheme(prevScheme => prevScheme === 'dark' ? 'light' : 'dark');
    };

    return(
        <ThemeContext.Provider value={{colorScheme,toggleColorScheme}}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);