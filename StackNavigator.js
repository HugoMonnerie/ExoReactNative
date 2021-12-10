import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';
import ListToDo from './listToDo';
import ToDo from './toDo';

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNav"
        options={{
          header: () => null,
        }}
        component={TabNavigator}
      />
      <Stack.Screen name="List To Do" component={ListToDo} />
      <Stack.Screen
        name="Ma To Do"
        options={{
          header: () => null,
        }}
        component={ToDo}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
