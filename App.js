import React from "react";
import Fases from "./fases.js";
import Camps from "./camps.js";
import Jogos from "./jogos.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Camps"
          component={Camps}
          options={{
            title: "Campeonatos",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#ff0000",
            },
          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: "Fases",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#ff0000",
            },
          }}
        />
        <Stack.Screen
          name="Jogos"
          component={Jogos}
          options={{
            title: "Jogos",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#ff0000",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
