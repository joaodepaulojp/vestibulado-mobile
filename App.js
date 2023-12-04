import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Welcome from './src/pages/Welcome';
//import Home from './src/pages/Home';
import QuizRosa from './src/pages/Quiz/indexRosa23';
import QuizAzul from './src/pages/Quiz/indexAzul23';
import QuizBranco from './src/pages/Quiz/indexBranco23';
import QuizAmarelo from './src/pages/Quiz/indexAmarelo23';
import Gabarito from './src/pages/Quiz/indexGabarito23';
import Sobre from './src/pages/Sobre';
import Enem2023 from './src/pages/Enem/Enem2023';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function Tabs() {
  return(
    <Routes/>
  )
}

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name = "Welcome"
      component={Welcome}
      options={{
        headerShown: false
      }}/>

      <Stack.Screen name= "Home"
      component={Tabs}
      options={{
        headerShown: false
      }}
      />

      <Stack.Screen name="QuizRosa"
      component={QuizRosa}
      />

      <Stack.Screen name="QuizAzul"
      component={QuizAzul}
      />

      <Stack.Screen name="QuizBranco"
      component={QuizBranco}
      />

      <Stack.Screen name="QuizAmarelo"
      component={QuizAmarelo}
      />

      <Stack.Screen name="Gabarito"
      component={Gabarito}
      />

      <Stack.Screen name="Sobre"
      component={Sobre}
      />

      <Stack.Screen name="Enem2023"
      component={Enem2023}
      />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
