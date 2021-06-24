import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, CharacterDetails, Splash, Search } from "../screens";
const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
