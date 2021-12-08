import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigation from './Drawer';
// <DrawerNavigation />
import StackNavigation from './Stack';
//<StackNavigation />
// import TabsNavigation from './Tabs';
//<TabsNavigation />

const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
}
export default Routes;