import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ flex: 0.5, alignItems: 'center', marginBottom: 34, marginTop: 15 }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 50, height: 50 }}
                />
                <Text>Bem vindo!</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://support.google.com/?hl=pt-BR')}
            />
            <DrawerItem
                label=""
                onPress={() => Linking.openURL('http://granbery.edu.br/fale-conosco')}
                icon={({ color, size }) => <Ionicons name='call-outline' color={color} size={size} />}
            />
            <View>
                <Text>Qualquer coisa</Text>
            </View>
        </DrawerContentScrollView>
    );
}
export default CustomDrawer;