import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import ListToDo from './listToDo';
import Exo1 from './Exos/Exo1';
import Exo2 from './Exos/Exo2';
import Exo3 from './Exos/Exo3';
import Exo4 from './Exos/Exo4';

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List To Do"
        options={{
          header: () => null,
        }}
        component={ListToDo}
      />
      <Tab.Screen
        name="Exo1"
        options={{
          header: () => null,
        }}
        component={Exo1}
      />
      <Tab.Screen
        name="Exo2"
        options={{
          header: () => null,
        }}
        component={Exo2}
      />
      <Tab.Screen
        name="Exo3"
        options={{
          header: () => null,
        }}
        component={Exo3}
      />
      <Tab.Screen
        name="Exo4"
        options={{
          header: () => null,
        }}
        component={Exo4}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
