import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../pages/Main';

const Stack = createStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    );
}