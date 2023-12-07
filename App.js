import 'react-native-url-polyfill/auto';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Welcome from './src/pages/Welcome';
//import Home from './src/pages/Home';
import QuizRosa from './src/pages/Quiz/Dia1/indexRosa23';
import QuizRosaLC23 from './src/pages/Quiz/LinguagensECódigos/indexRosa23';
import QuizRosaCH23 from './src/pages/Quiz/CienciasHumanas/indexRosa23';
import QuizRosaCN23 from './src/pages/Quiz/CienciasDaNatureza/indexRosa23';
import QuizRosaMAT23 from './src/pages/Quiz/Matematica/indexRosa23';
import QuizRosa2Dia23 from './src/pages/Quiz/Dia2/indexRosa23';
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

      <Stack.Screen name="QuizRosaLC23"
      component={QuizRosaLC23}
      />

      <Stack.Screen name="QuizRosaCH23"
      component={QuizRosaCH23}
      />

      <Stack.Screen name="QuizRosaCN23"
      component={QuizRosaCN23}
      />

      <Stack.Screen name="QuizRosaMAT23"
      component={QuizRosaMAT23}
      />

      <Stack.Screen name="QuizRosa2Dia23"
      component={QuizRosa2Dia23}
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
