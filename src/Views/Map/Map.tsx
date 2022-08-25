import React, {useEffect, useState} from "react"
import MapView, {Marker} from 'react-native-maps';

import {View} from "native-base"
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";
import {Entypo} from '@expo/vector-icons';

import {dummyData} from "../../../dummyData";
import {Gym, GymAndNavigation} from "../GymProfile/GymProfile";

export const Map: React.FC<GymAndNavigation> = ({navigation, route}) => {
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        if (route?.params?.gym) {
            setRegion({
                latitude: route.params.gym.location[0],
                longitude: route.params.gym.location[1],
            })
            navigation.setParams({
                gym: null
            })
        } else {
            let a = {
                latitude: dummyData.map((x) => x.location[0]).reduce((x, y) => Math.max(x, y)),
                longitude: dummyData.map((x) => x.location[1]).reduce((x, y) => Math.max(x, y)),
            };
            setRegion(a)
        }
    }, [])

    const handleCalloutPress = async (gym: Gym) => {
        await navigation.navigate("GymProfile", {
            gym: gym
        });
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: .8,
                    longitudeDelta: .8,
                }}
            >
                {dummyData.map((gym, index) => (
                    <Marker
                        key={index}
                        coordinate={{latitude: gym.location[0], longitude: gym.location[1]}}
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
        </View>
    )
}
