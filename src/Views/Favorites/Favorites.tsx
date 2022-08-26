import React, {useEffect, useState} from "react";
import {Box, FlatList, useToast} from "native-base";
import {SummaryCard} from "../../Components/SummaryCard/SummaryCard";
import {Props} from "../Home/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const Favorites: React.FC<Props> = ({ navigation, route }) => {
    const [favoriteGyms, setFavoriteGyms] = useState([])
    const toast = useToast();

    useEffect(() => {
        fetchGymsFromLS().catch(error => {
             toast.show({
                description: `Something went wrong! - ${error}`,
                placement: "top",
            })
        });
    }, [navigation, route])

    const fetchGymsFromLS = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('allGyms')
            if (jsonValue !== null) {
                await setFavoriteGyms(JSON.parse(jsonValue));
                await toast.show({
                    description: "Favorites retrieved!",
                    placement: "top",
                })
            } else {
                await toast.show({
                    description: "No favorites yet!",
                    placement: "top",
                })
            }
        }
        catch (error) {
            await toast.show({
                description: `Something went wrong! - ${error}`,
                placement: "top",
            })
        }
    }

    return (
        <Box height="100%">
            <FlatList data={favoriteGyms} renderItem={({item}) => (
                <Box my={3}>
                    <SummaryCard
                        allGyms={favoriteGyms}
                        navigation={navigation}
                        gym={item}
                    />
                </Box>
            )}/>
        </Box>
    )
}
