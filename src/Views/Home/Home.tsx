import React, {useEffect, useState} from "react";
import {supabase} from "../../../supabase";

import {TouchableOpacity} from "react-native";
import {FlatList, Box, useToast} from "native-base";
import {SummaryCard} from "../../Components/SummaryCard/SummaryCard"
import {styles} from "../../Styles/Styles";

import { FontAwesome5 } from '@expo/vector-icons';
import {dummyData} from "../../../dummyData";

export type Props = {
    navigation: any;
}

export const Home: React.FC<Props> = ({navigation}) => {
    const [allGyms, setAllGyms] = useState([]);
    const toast = useToast();

    useEffect(() => {
        fetchGyms().catch();
    }, [])

    const switchToMapHandler = async () => {
        await navigation.navigate("Map");
    }

    const fetchGyms = async () => {
        const { data, error } = await supabase.from('gyms').select(`
            id,
            name,
            description,
            slogan,
            discipline,
            locationName,
            disColor,
            imageUrl,
            distance,
            phone,
            email,
            website,
            longitude,
            latitude
        `)
        if (error) {
            await console.log("ERROR", error)
        } else {
            // @ts-ignore
            setAllGyms(data)
            await toast.show({
                description: "Gym retrieved!",
                placement: "top",
                // @ts-ignore
                status: "success"
            })
        }

    }

    return (
        <Box>
            <FlatList data={dummyData} renderItem={({item}) => (
                <Box my={3}>
                    <SummaryCard
                        navigation={navigation}
                        gym={item}
                    />
                </Box>
            )}/>

            <TouchableOpacity
                onPress={() => switchToMapHandler()}
                style={[
                    styles.homeSwitchBtn,
                ]}
            >
                <FontAwesome5 name="map-marker-alt" size={30} color="#dc2626" />
            </TouchableOpacity>
        </Box>
    )
}
