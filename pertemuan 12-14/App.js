import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import project from './Project/Index';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      NameProject="Signin"
    >
      {project.map((project) => (
        <Stack.Screen
          key={project.name}
          name={project.name}
          component={project.component}
          options={project.options}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
