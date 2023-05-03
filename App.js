import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRouter from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
}