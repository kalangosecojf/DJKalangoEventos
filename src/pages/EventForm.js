import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../server/constants';

export default function EventForm({ navigation }) {
    const [id, setId] = useState(0)
    const [flyer, setFlyer] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [heart, setHeart] = useState('')


    const eventCrud = () => {

        const newEvent = {
            flyer,
            name,
            date,
            time,
            address,
            district,
            city,
            phone,
            heart
        }


        fetch(`${URL}/events?id=${id}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.length == 0) {
                    fetch(`${URL}/events`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newEvent)
                    })
                        .then((response) => {
                            if (response.ok) {
                                alert("Cadastro realizado com sucesso");
                                navigation.navigate("Home");
                            }
                            else {
                                alert("Ocorreu uma falha no cadastro");
                            }
                        })
                }
                else {
                    alert("Ocorreu uma falha no cadastro")
                }
            })


    }
    /*
    "name": "Dia Nacional do Forró",
    "date": "2022-12-11",
    "time": "20:00",
    "address": "Rua Jose Lourenco, 393",
    "district": "Sao Pedro",
    "city": "Juiz de Fora",
    "state": "MG",
    "phone": "(32) 999659375",
    */
    return (
        <Background>
            <Logo />
            <TextInput
                label="Id"
                returnKeyType="next"
                value={id}
                onChangeText={(text) => setId()}
            />
            <TextInput
                label="Name"
                returnKeyType="next"
                value={name}
                onChangeText={(text) => setName()}
            />
            <TextInput
                label="Date"
                returnKeyType="next"
                value={date}
                onChangeText={(text) => setDate()}
            />
            <TextInput
                label="Time"
                returnKeyType="next"
                value={time}
                onChangeText={(text) => setTime()}
            />
            <TextInput
                label="Address"
                returnKeyType="next"
                value={address}
                onChangeText={(text) => setAddress()}
            />
            <TextInput
                label="District"
                returnKeyType="next"
                value={district}
                onChangeText={(text) => setDistrict()}
            />
            <TextInput
                label="City"
                returnKeyType="next"
                value={city}
                onChangeText={(text) => setCity()}
            />
            <TextInput
                label="phone"
                returnKeyType="next"
                value={phone}
                onChangeText={(text) => setPhone()}
                keyboardType="phone-pad"
            />
            <Button
                mode="contained"
                onPress={eventCrud}
                style={{ marginTop: 24 }}
            >
                Add
            </Button>
        </Background>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})
