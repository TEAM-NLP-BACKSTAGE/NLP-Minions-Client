import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Ranking from './Ranking';
import Labeling from './Labeling';
import Evaluate from './Evaluate';
import Result from './Result';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Ranking' component={Ranking}/> 
        <Stack.Screen name='Labeling' component={Labeling}/>
        <Stack.Screen name='Evaluate' component={Evaluate}/>
        <Stack.Screen name='Result' component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}