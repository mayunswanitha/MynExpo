import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import project from './btn';

const Tab = createBottomTabNavigator();

const TabProject = () => (
  <Tab.Navigator
    Name="Menu"
    tabBarOptions={{
      labelStyle: {
        marginBottom: 6,
      },
    }}>
    {project.map((project) => (
      <Tab.Screen
        key={project.name}
        name={project.name}
        component={project.component}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={project.icon}
              size={size}
              color={color}
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default TabProject;
