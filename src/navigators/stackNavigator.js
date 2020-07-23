import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Success from '../features/success.js'
import Fail from '../features/fail'

import Level1 from '../features/level1/level1'
import Level2 from '../features/level2/level2'
import Level3 from '../features/level3/level3'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Level1" component={Level1} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level2" component={Level2} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Level3" component={Level3} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Success" component={Success} options={{ gestureEnabled: false}} />
        <Stack.Screen name="Fail" component={Fail} options={{ gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
