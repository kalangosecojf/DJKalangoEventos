import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Details from '../pages/Details';
import Login from '../pages/Login';
import EventForm from '../pages/EventForm';


const Tabs = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home'
    },
    Favorites: {
        name: 'heart'
    },
    Details: {
        name: 'hearto'
    },
    Logout: {
        name: 'logout'
    },
}

const TabsNavigation = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    const { name } = icons[route.name];
                    return <AntDesign name={name} color='#f87c20' size={30} />
                },
                tabBarStyle: {
                    backgroundColor: 'white'
                },
                tabBarActiveTintColor: '#f87c20',
                tabBarInactiveTintColor: 'gray',

                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTintColor: 'white',
            })
            }
        >
            <Tabs.Screen
                name="Home"
                component={Home}
            />
            <Tabs.Screen
                name="Favorites"
                component={Favorites}
            />
            <Tabs.Screen
                name="Details"
                component={Details}
            />
            <Tabs.Screen
                name="EventForm"
                component={EventForm}
            />
            <Tabs.Screen
                name="Logout"
                component={LoginScreen}
            />
        </Tabs.Navigator>
    );
}
export default TabsNavigation;