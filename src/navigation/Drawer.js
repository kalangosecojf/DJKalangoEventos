import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Details from '../pages/Details';
import EventForm from '../pages/EventForm';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={CustomDrawer}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                name="Favorites"
                component={Favorites}
            />
            <Drawer.Screen
                name="Details"
                component={Details}
            />
            <Drawer.Screen
                name="EventForm"
                component={EventForm}
            />

        </Drawer.Navigator>
    );
}
export default DrawerNavigation;