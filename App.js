import "react-native-gesture-handler";
import React from "react";
import { FirstScreen } from "./screens/firstScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { List } from "./screens/secondScreen";
import { Search } from "./screens/searchScreen";
import { Details } from "./screens/detailsScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="searchScreen" headerMode="none">
        <Stack.Screen name="firstScreen" component={FirstScreen} />
        <Stack.Screen name="secondScreen" component={List} />
        <Stack.Screen name="searchScreen" component={Search} />
        <Stack.Screen name="detailsScreen" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
