import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

/**
 * Custom light theme based on default light theme with changed primary color
 */
export const MyLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6666FF',
  },
};

/**
 * Custom dark theme based on default dark theme with changed primary color
 */
export const MyDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#6666FF',
  },
};

/**
 * Theme colors that are permanent and do not change with system theme
 */
export const permanentColors = {
  primary: '#6666FF',
  text: '#ffffff',
  textDark: '#000000',
};
