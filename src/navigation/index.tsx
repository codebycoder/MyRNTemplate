// Create routing structure
import React from 'react'; // Add missing import

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens, Tabs} from './screens';
import Tab1 from '@screens/tabs/Tab1';
import Tab2 from '@screens/tabs/Tab2';
import Tab3 from '@screens/tabs/Tab3';
import Tab4 from '@screens/tabs/Tab4';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {/* Your tab navigation components */}
      <Tab.Screen name={Tabs.Tab1} component={Tab1} />
      <Tab.Screen name={Tabs.Tab2} component={Tab2} />
      <Tab.Screen name={Tabs.Tab3} component={Tab3} />
      <Tab.Screen name={Tabs.Tab4} component={Tab4} />
    </Tab.Navigator>
  );
};

export const InnerNavigation = () => {
  return (
    <NavigationContainer>
      {/* Your navigation components */}
      <AppStack.Navigator>
        <AppStack.Screen
          name={Screens.TabNavigation}
          component={TabNavigation}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
