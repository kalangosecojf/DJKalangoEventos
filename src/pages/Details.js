import React, { useEffect, useState } from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, Text, Image, StyleSheet, Linking, Layout, } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../server/constants';
import { useNavigation } from '@react-navigation/native';


export default function Datails({ route }) {

    const navigation = useNavigation();
    const { id } = route.params;

    fetch(`${URL}/events/${route.params?.id}`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.length == 0) {
                alert(route.params?.id);
                navigation.navigate("Home");
            }
            else {
                navigation.navigate("Home");
            }
        })




    return (
        <Background>
            <Logo />

            <Button
                mode="outlined"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    })
                }
            >
                Logout
            </Button>


        </Background>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'with',
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    img: {
        width: 300,
        height: 300,
        borderColor: "#000000"
    },
    viewImg: {
        flex: 2,
        padding: 20,
        backgroundColor: 'with',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    viewButton: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: '#D2691E',
        justifyContent: 'center',
    },
    btnQuebrar: {
        padding: 20,
        color: '#F0f0f0'
    },
    btnResetar: {
        padding: 20,
        color: '#F0f0f0'
    },
    box1: {
        flex: 2,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2: {
        flex: 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        margin: 6,
        padding: 6,
        borderColor: 'red',
    },
    scroll: {
        padding: 20,
    }
});
