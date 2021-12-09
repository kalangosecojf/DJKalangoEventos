import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme'

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';
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
    Settings: {
        name: 'settings'
    },
    EventForm: {
        name: 'add-circle'
    },
    Logout: {
        name: 'exit'
    },
}

const TabsNavigation = () => {
    return (
        <Tabs.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name]
                    return <Ionicons name={name} color={theme.colors.iconPrimary} size={30} />
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.primary
                },
                tabBarActiveTintColor: theme.colors.iconPrimary,
                tabBarInactiveTintColor: theme.colors.iconPrimary,

                headerStyle: {
                    backgroundColor: theme.colors.primary
                },
                headerTintColor: theme.colors.iconPrimary,
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
                name="Settings"
                component={Settings}
            />
            <Tabs.Screen
                name="EventForm"
                component={EventForm}
            />
            <Tabs.Screen
                name="Logout"
                component={Login}
            />
        </Tabs.Navigator>
    );
}
export default TabsNavigation;