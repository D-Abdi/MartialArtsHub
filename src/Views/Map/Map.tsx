import React, {useEffect, useState} from "react"
import MapView, {Marker} from 'react-native-maps';

import {View} from "native-base"
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";

import { Entypo } from '@expo/vector-icons';

import {Props} from "../Home/Home";
import {dummyData} from "../../../dummyData";

export const Map: React.FC<Props> = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0
    });

    useEffect(() => {
        let a = {
            latitude: dummyData.map((x) => x.location[0]).reduce((x, y) => Math.max(x, y)),
            longitude: dummyData.map((x) => x.location[1]).reduce((x, y) => Math.max(x, y)),
        };
        setRegion(a)
        console.log(region, "Region")
    }, [])

    return (
        <View style={styles.container}>
            <MapView style={styles.map}

                     initialRegion={{
                         latitude: region.latitude,
                         longitude: region.longitude,
                         latitudeDelta: 1,
                         longitudeDelta: 1,
                     }}
            >
                {dummyData.map((gym, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude : gym.location[0] , longitude : gym.location[1] }}
                        title={gym.name}
                        description={gym.description}
                    />
                ))}
            </MapView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                    styles.homeSwitchBtn,
                ]}
            >
                <Entypo name="grid" size={40} color="#8b5cf6" />
            </TouchableOpacity>
        </View>
    )
}
