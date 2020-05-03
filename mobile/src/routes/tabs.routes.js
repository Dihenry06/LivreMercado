import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../components/tab-bar';

import HomeScreen from '../pages/home';
import FeedScreen from '../pages/feed';
import CartScreen from '../pages/cart';
import SearchScreen from '../pages/search';
import UserScreen from '../pages/user';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator tabBar={content => <TabBar tabs={content} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}