import React, {useEffect, useState} from "react"
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import {Center, Skeleton, View, VStack} from "native-base"
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";
import {Entypo} from '@expo/vector-icons';

import {Gym, GymAndNavigation, GymProfile} from "../GymProfile/GymProfile";

export const Map: React.FC<GymAndNavigation> = ({navigation, route}) => {
    const [allGyms, setAllGyms] = useState([{
        imageUrl: "",
        disColor: "",
        name: "",
        discipline: "",
        slogan: "",
        description: "",
        locationName: "",
        distance: "",
        latitude: 0,
        longitude: 0,
        reviews: [{rating: null, review: null, name: null}],
        rating: null,
        phone: "",
        email: "",
        website: ""
    }]);
    const [location, setLocation] = useState({
        coords: {
            longitude: 0,
            latitude: 0,
        }
    });
    const [errorMsg, setErrorMsg] = useState(null);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0
    });
    let regionSet: boolean = false;

    // find and set current user location
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // @ts-ignore
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let newLoc = await Location.getCurrentPositionAsync({});
            console.log(newLoc, "Location")
            // @ts-ignore
            setLocation(newLoc);
        })();
    }, []);

    // Set all gyms from param
    useEffect(() => {
        if (route?.params?.allGyms) {
            setAllGyms(route?.params?.allGyms)
            navigation.setParams({
                allGyms: null
            })
        }

        // Set region based on gym params
        if (route?.params?.gym) {
            setRegion({
                latitude: route.params.gym.latitude,
                longitude: route.params.gym.longitude,
            })
            navigation.setParams({
                gym: null
            })
        }
    }, [])

    // If no region is set from a gym from route, calc the outer most long and lat
    // Set region
    useEffect(() => {
        if (!regionSet) {
            if (allGyms && allGyms.length > 0) {
                let globalRegion: { latitude: number; longitude: number; } = {
                    latitude: allGyms.map((x: any) => x.latitude).reduce((x: number, y: number) => Math.max(x, y)),
                    longitude: allGyms.map((x: any) => x.longitude).reduce((x: number, y: number) => Math.max(x, y)),
                };
                setRegion(globalRegion)
            }
        }
    }, [allGyms])

    // Nav to specific gym
    const handleCalloutPress = async (gym: Gym) => {
        await navigation.navigate("GymProfile", {
            gym: gym
        });
    }

    return (
        <View style={styles.container}
              _dark={{
                  bg: 'coolGray.800',
                  color: "#fff"
              }} _light={{
            bg: 'warmGray.50',}}
        >
            {allGyms && allGyms.length >  0 && allGyms[0].latitude !== 0 && allGyms[0].longitude !== 0 ?
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: region.latitude,
                            longitude: region.longitude,
                            latitudeDelta: .8,
                            longitudeDelta: .8,
                        }}
                    >
                        <Marker coordinate={{latitude: location?.coords?.latitude, longitude: location?.coords?.longitude}} title="You"></Marker>
                        {allGyms.map((gym, index) => (
                            <Marker
                                key={index}
                                coordinate={{latitude: gym.latitude, longitude: gym.longitude}}
                                title={gym.name}
                                description={gym.locationName}
                                onCalloutPress={() => handleCalloutPress(gym)}
                            />

                        ))}
                    </MapView>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[
                            styles.homeSwitchBtn,
                        ]}
                    >
                        <Entypo name="grid" size={40} color="#dc2626"/>
                    </TouchableOpacity>
                </>
                :<Center w="100%">
                    <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                        borderColor: "coolGray.500"
                    }} _light={{
                        borderColor: "coolGray.200"
                    }}>
                        <Skeleton h="40"/>
                        <Skeleton.Text px="4"/>
                        <Skeleton px="4" my="4" rounded="md" startColor="primary.100"/>
                    </VStack>
                </Center>}
        </View>
    )
}
