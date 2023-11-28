import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Welcome from './src/pages/Welcome';

export default function App() {
  const [isWelcomeDone, setWelcomeDone] = useState(false);

  useEffect(() => {
    // Tempo que a tela de boas-vindas fica a mostra para o usuário
    setTimeout(() => {
      setWelcomeDone(true);
    }, 7000); // Define o tempo da tela
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      {isWelcomeDone ? <Routes /> : <Welcome />}
    </NavigationContainer>
  );
}
