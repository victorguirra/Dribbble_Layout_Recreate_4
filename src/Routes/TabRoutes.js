import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/Home';
import LearnScreen from '../Screens/Learn';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <NavigationContainer independent={ true }>

            <Navigator>

                <Screen name="Home" component={ HomeScreen } />
                <Screen name="Learn" component={ LearnScreen } />

            </Navigator>

        </NavigationContainer>
    )
}