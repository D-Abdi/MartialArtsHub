import React, {useEffect, useState} from "react"
import MapView, {Marker} from 'react-native-maps';

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
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0
    });
    let regionSet: boolean = false;

    useEffect(() => {
        if (route?.params?.allGyms) {
            setAllGyms(route?.params?.allGyms)
            navigation.setParams({
                allGyms: null
            })
        }

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

    const handleCalloutPress = async (gym: Gym) => {
        await navigation.navigate("GymProfile", {
            gym: gym
        });
    }

    return (
        <View style={styles.container}>
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
