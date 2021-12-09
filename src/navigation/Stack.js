import React from 'react'
import { Provider } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../core/theme'
import {
    Login,
    Register,
    Home,
    Details,
    Favorites,
    EventForm
} from '../pages'
import TabsNavigation from './Tabs';

const Stack = createStackNavigator()
// <Provider theme={theme}>
//        </Provider>
const StackNavigation = () => {
    return (

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: true,
                headerMode: 'screen',
                headerTintColor: theme.colors.iconPrimary,
                headerStyle: { backgroundColor: theme.colors.primary },
                headerTitleStyle: { color: theme.colors.iconPrimary }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="EventForm" component={EventForm} />
            <Stack.Screen name="Tabs" component={TabsNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigation;
