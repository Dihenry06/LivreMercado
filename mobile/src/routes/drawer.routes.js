import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/custom-drawer';

import HomeScreen from '../pages/home';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Account" component={HomeScreen} />
            <Drawer.Screen name="Sales" component={HomeScreen} />
        </Drawer.Navigator>
    );
}