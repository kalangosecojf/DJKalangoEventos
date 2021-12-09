import React, { useEffect, useState } from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, Text, Image, StyleSheet, Linking, Layout, ActivityIndicator, FlatList, } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import { URL } from '../server/constants';


export default function Details({ navigation, route }) {
    const [isLoading, setIsLoading] = useState(false);
    const [idDetail, setIdDetail] = useState(route.params?.id);
    const [eventss, setEvents] = useState([]);



    const getData = async () => {
        try {
            const response = await fetch(`${URL}/events/${idDetail}`);
            const json = await response.json();
            setEvents(json);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])


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

            <Card>
                {
                    events.map((u, i) => {
                        return (
                            <View key={i} style={styles.user}>
                                <Image
                                    style={styles.img}
                                    resizeMode="cover"
                                    source={require("../assets/flyers/" + (u.flyer ? u.flyer : "djk00.png"))}
                                />

                                <View style={{ flex: 1, flexDirection: 'row', height: 50 }}>
                                    <View style={{ width: 30, height: 30 }} >
                                        <Button
                                            icon='information'
                                            color="#f87c20"
                                            labelStyle={{ fontSize: 25 }}
                                            onPress={() => navigation.navigate("EventForm", {
                                                id: idDetail, action: 'edit'
                                            })}
                                        />
                                    </View>
                                    <View style={{ width: 30, height: 30 }} >
                                        <Button
                                            icon='delete'
                                            color="#f87c20"
                                            labelStyle={{ fontSize: 25 }}
                                            onPress={() => navigation.navigate("EventForm", {
                                                id: idDetail, action: 'delete'
                                            })}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <View style={{ width: 300 }} >
                                        <Text>
                                            Id:  {idDetail}
                                        </Text>
                                        <Text>
                                            Event:  {u.name}
                                        </Text>
                                        <Text>
                                            Date:  {u.date}
                                        </Text>
                                        <Text>
                                            Time:  {u.time}
                                        </Text>
                                        <Text>
                                            Address:  {u.address}
                                        </Text>
                                        <Text>
                                            District:  {u.district}
                                        </Text>
                                        <Text>
                                            City:  {u.city}
                                        </Text>
                                        <Text>
                                            Phone:  {u.phone}
                                        </Text>

                                    </View>
                                </View>

                            </View>


                        );
                    })
                }
            </Card>

            <Button
                mode="contained"
                onPress={() =>
                    navigation.navigate("EventForm", {
                        action: 'new'
                    })
                }
            >
                New Event
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
