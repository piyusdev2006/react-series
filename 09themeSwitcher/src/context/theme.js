import { createContext, useContext } from 'react';

// default value of the context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;
    

// custom hook to use the theme context
export default function useTheme() {
    return useContext(ThemeContext)
}