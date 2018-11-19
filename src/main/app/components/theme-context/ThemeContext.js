import React from 'react';

export const ThemeName = {
  DARK: 'dark',
  LIGHT: 'light'
};

export function createThemeClassName(componentBaseClassName, themeName) {
  switch (themeName) {
    case ThemeName.DARK:
      return `${componentBaseClassName}_theme-dark`;
    case ThemeName.LIGHT:
      return `${componentBaseClassName}_theme-light`;
  }
}

const themeContext = React.createContext(ThemeName.LIGHT);

export const ThemeProvider = themeContext.Provider;

export const ThemeConsumer = themeContext.Consumer;