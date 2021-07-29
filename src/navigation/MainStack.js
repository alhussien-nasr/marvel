import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, CharacterDetails, Search } from "../screens";
const Stack = createStackNavigator();
const RootStack = createStackNavigator();
export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};

export const Root = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStack} />
      <RootStack.Screen
        name="Search"
        component={Search}
        options={{ cardStyle: { backgroundColor: "transparent" } }}
      />
    </RootStack.Navigator>
  );
};
