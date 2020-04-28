import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// routes
import LoginScreen from './auth/login';
import RegisterScreen from './auth/register';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}