import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditarTarefaScreen from "./screens/EditarTarefaScreen";
import HomeScreen from "./screens/HomeScreen";
import NovaTarefaScreen from "./screens/NovaTarefaScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen name="EditarTarefaScreen" component={EditarTarefaScreen} />
        <Stack.Screen name="NovaTarefaScreen" component={NovaTarefaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
