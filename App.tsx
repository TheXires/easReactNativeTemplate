import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { de, en } from './src/i18n';
import { Navigation } from './src/navigation';

export default function App() {
  const theme = useColorScheme();

  I18n.fallbacks = true;
  // eslint-disable-next-line sort-keys
  I18n.translations = { en, de };
  I18n.locale = Localization.locale;

  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const backgroundColor = theme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card;

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <Navigation />
    </>
  );
}
