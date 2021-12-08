import React, { useEffect, useState } from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, Text, Image, StyleSheet, Linking, Layout, } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import { URL } from '../server/constants';


export default function Home({ navigation }) {



  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [iconSave, setIconSave] = useState(false)

  const [heartIcon, setHeartIcon] = useState('heart-outline');


  function updateHeartIcon(id) {
    const favorites = events.map(event => {
      return event.id === id ? { ...event, marked: !event.marked } : event
    })
    setHeartIcon(favorites)
  }

  useEffect(() => {
    const favIcons = events.filter(icon => icon == true ? 'heart-outline' : 'heart')
    setIconSave(favIcons)
  }, [events])

  const getData = async () => {
    try {
      const response = await fetch(`${URL}/events`);
      const json = await response.json();
      setEvents(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, [])


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

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ width: 200, height: 50 }} >
                    <Paragraph>
                      {u.name}
                    </Paragraph>
                  </View>
                  <View style={{ width: 30, height: 30 }} >
                    <Button
                      icon={u.heart ? "heart" : "heart-outline"}
                      color="#f87c20"
                      labelStyle={{ fontSize: 25 }}
                      onPress={() => updateHeartIcon(u.id)}
                    />
                  </View>

                  <View style={{ width: 30, height: 30 }} >
                    <Button
                      icon='eye'
                      color="#f87c20"
                      labelStyle={{ fontSize: 25 }}
                      onPress={() => navigation.navigate("Details", {
                        id: u.id
                      })}
                    />
                  </View>
                  <View style={{ width: 30, height: 30 }} >
                    <Button
                      icon='google-maps'
                      color="#f87c20"
                      labelStyle={{ fontSize: 25 }}
                      text="Go To Maps"
                      status="info"
                      onPress={() => Linking.openURL("https://www.google.com/maps/place/" + u.address + " - " + u.district + " - " + u.city + " - " + u.state)}
                    />
                  </View>
                </View>

              </View>


            );
          })
        }
      </Card>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate("EventForm")
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
