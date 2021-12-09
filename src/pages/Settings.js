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

export default function Settings({ navigation, route }) {
    const [idDetail, setIdDetail] = useState(route.params?.id);
    const [btnAction, setBtnAction] = useState(route.params?.action);


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

    const newInfoEvents = {
        flyer, name, date, time, address, district, city, phone, heart
    }


    // Edit Events
    const handleEdit = () => {
        alert(btnAction);

        fetch(`${URL}/events?id=${idDetail}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {

                if (response.length > 0) {
                    fetch(`${URL}/events/${idDetail}`, {
                        method: "PATCH",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(changeEvents)
                    })
                        .then((response) => {
                            if (response.ok) {
                                alert("ALTERACAO com sucesso");
                                navigation.navigate("Home");
                            }
                            else {
                                alert("Ocorreu uma falha ao ALTERAR os dados");
                            }
                        })
                }
            }
            )
    }

    // Delete Events
    const handleDelete = () => {
        alert(btnAction);

        fetch(`${URL}/events?id=${idDetail}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((response) => {

                if (response.length > 0) {
                    fetch(`${URL}/events/${idDetail}`, {
                        method: "DELETE",
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then((response) => {
                            if (response.ok) {
                                alert("DELETE com sucesso");
                                navigation.navigate("Home");
                            }
                            else {
                                alert("Ocorreu uma falha ao DELETAR os dados");
                            }
                        })
                }
            }
            )

    }
    // New Events
    const handleNew = () => {
        alert(btnAction);

        fetch(`${URL}/events`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInfoEvents)
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


    const handAction = () => {
        if (btnAction == 'edit') {
            handleEdit();
        }
        else if (btnAction == 'delete') {
            handleDelete();
        }
        else if (btnAction == 'new') {
            handleNew();
        }

    }



    const events = [{
        "id": 1,
        "flyer": "djk01.jpg",
        "name": "A Volta do Kalango",
        "date": "2021-12-12",
        "time": "17:00",
        "address": "Rua Jose Lourenco, 393",
        "district": "Sao Pedro",
        "city": "Juiz de Fora",
        "phone": "(32) 999659375",
        "heart": "S"
    }]

    return (
        <Background>
            <Logo />
            {
                events.map((u, i) => {
                    return (

                        <View key={i} style={styles.user}>
                            <TextInput
                                label="Id"
                                returnKeyType="next"
                                value={idDetail}
                                onChangeText={(text) => setId()}
                            />
                            <TextInput
                                label="Name"
                                returnKeyType="next"
                                value={u.name}
                                onChangeText={(text) => setName()}
                            />
                            <TextInput
                                label="Date"
                                returnKeyType="next"
                                value={u.date}
                                onChangeText={(text) => setDate()}
                            />
                            <TextInput
                                label="Time"
                                returnKeyType="next"
                                value={u.time}
                                onChangeText={(text) => setTime()}
                            />
                            <TextInput
                                label="Address"
                                returnKeyType="next"
                                value={u.address}
                                onChangeText={(text) => setAddress()}
                            />
                            <TextInput
                                label="District"
                                returnKeyType="next"
                                value={u.district}
                                onChangeText={(text) => setDistrict()}
                            />
                            <TextInput
                                label="City"
                                returnKeyType="next"
                                value={u.city}
                                onChangeText={(text) => setCity()}
                            />
                            <TextInput
                                label="phone"
                                returnKeyType="next"
                                value={u.phone}
                                onChangeText={(text) => setPhone()}
                                keyboardType="phone-pad"
                            />


                        </View>


                    );
                })
            }
            <Button
                mode="contained"
                onPress={handAction}
                style={{ marginTop: 24 }}
            >
                {btnAction}
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
