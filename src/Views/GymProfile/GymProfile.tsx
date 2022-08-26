import React, {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import {
    AspectRatio,
    Box,
    Button,
    Center,
    HStack,
    Image,
    ScrollView,
    Skeleton,
    Stack,
    Text,
    useToast,
    VStack
} from "native-base";
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";

import {AntDesign, FontAwesome, FontAwesome5, Ionicons, Foundation} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Gym {
    imageUrl: string;
    disColor: string;
    name: string;
    discipline: string;
    slogan: string;
    description: string;
    locationName: string;
    distance: string;
}

export interface GymProfile extends Gym {
    latitude: number;
    longitude: number;
    reviews?: {
        review: string,
        name: string,
        rating: number
    }[];
    phone?: string;
    email?: string;
    website?: string;
}

export interface GymAndNavigation {
    gym: GymProfile;
    navigation: any;
    route: any;
}

export const GymProfile: React.FC<GymAndNavigation> = ({navigation, route}) => {
    const [gym, setGym] = useState({
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
    });
    const [favoriteGyms, setFavoriteGyms] = useState(
        [
            {
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
            }
        ]
    )
    const toast = useToast();

    useEffect(() => {
        fetchGymsFromLS().catch()
        if (route?.params?.gym !== null && route?.params?.gym !== undefined) {
            setGym(route.params.gym);
            navigation.setParams({
                gym: null
            })
        }
    })

    const fetchGymsFromLS = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('allGyms')
            if (jsonValue !== null) {
                await setFavoriteGyms(JSON.parse(jsonValue));
            } else {
                setFavoriteGyms([]);

            }
        } catch (error) {
            await toast.show({
                description: `Something went wrong! - ${error}`,
                placement: "top",
            })
        }
    }

    const handleAddToFavorites = async () => {
        try {
            const favoritesData = await AsyncStorage.getItem('allGyms')
            if (favoritesData !== null) {
                const favorites = JSON.parse(favoritesData);
                favorites.push(gym);
                const newFavoritesData = JSON.stringify(favorites);
                await AsyncStorage.setItem("allGyms", newFavoritesData)
            } else {
                const favoriteData = JSON.stringify([gym]);
                await AsyncStorage.setItem("allGyms", favoriteData)
            }
            await toast.show({
                description: `Added gym to favorites!`,
                placement: "top",
            })
        } catch (error) {
            await toast.show({
                description: `Something went wrong! - ${error}`,
                placement: "top",
            })
        }
    }

    const handleRemoveFromFavorites = async () => {
        try {
            const favoritesData = await AsyncStorage.getItem('allGyms')
            if (favoritesData !== null) {
                const favorites = JSON.parse(favoritesData);
                const newFavoriteGyms = favorites.filter((item: GymProfile) => item.name !== gym.name)
                const stringifiedGyms = JSON.stringify(newFavoriteGyms);
                await AsyncStorage.setItem("allGyms", stringifiedGyms)
            }
            await toast.show({
                description: `Removed from favorites!`,
                placement: "top",
            })
        } catch (error) {
            await toast.show({
                description: `Something went wrong! - ${error}`,
                placement: "top",
            })
        }
    }

    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                    styles.backBtn,
                ]}
            >
                <AntDesign name="leftcircle" size={30} color="#dc2626"/>
            </TouchableOpacity>
            <ScrollView>
                {gym.imageUrl !== "" && gym.latitude !== 0 && gym.longitude !== 0 ?
                    <>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: gym.imageUrl,
                            }} alt="image"/>
                        </AspectRatio>
                        <Box marginTop={6}>
                            <Text fontStyle="italic" fontSize={22} fontWeight={600} color="#991b1b"
                                  textAlign="center">"{gym.slogan}"</Text>
                            <Text fontWeight={900} fontSize={18} textAlign="center"
                                  color="#991b1b">- {gym.name}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6} width={120} bg={gym.disColor} borderRadius="20px">
                            <Text paddingX={4} paddingY={2} color="#fff" textAlign="center">{gym.discipline}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#991b1b">Description</Text>
                            <Text fontSize={12}>{gym.description}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#991b1b">Contact</Text>
                            <HStack space={3} mt={2}>
                                <Stack direction="column" space={3}>
                                    <FontAwesome name="phone" size={24} color="#0ea5e9"/>
                                    <Ionicons name="mail" size={24} color="#0ea5e9"/>
                                    <Foundation name="web" size={24} color="#0ea5e9"/>
                                </Stack>
                                <Stack direction="column" space={4}>
                                    <Text maxW={500} color="#0ea5e9">{gym.phone}</Text>
                                    <Text maxW={500} color="#0ea5e9">{gym.email}</Text>
                                    <Text maxW={500} color="#0ea5e9">{gym.website} </Text>
                                </Stack>
                            </HStack>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#991b1b">Location</Text>
                            <MapView
                                style={styles.profileMap}
                                initialRegion={{
                                    latitude: gym.latitude,
                                    longitude: gym.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                scrollEnabled={false}
                            >
                                <Marker
                                    coordinate={{latitude: gym.latitude, longitude: gym.longitude}}
                                    title={gym.name}
                                    description={gym.locationName}
                                />
                            </MapView>
                        </Box>
                        <Box marginX={5} marginY={6}>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <Box flexDir="row" justifyContent="space-between">
                                    <Button backgroundColor="red.800">View location</Button>
                                </Box>
                                <Text color="#991b1b" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {gym.locationName} {gym.distance} <FontAwesome5 name="location-arrow" size={16}
                                                                                    color="#991b1b"/>
                                </Text>
                            </HStack>
                        </Box>
                        <Box marginX={5} marginY={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#991b1b">Action</Text>
                            <Box flexDir="row" justifyContent="space-between">
                                {favoriteGyms.find((item) => item.name === gym.name) ? (
                                    <TouchableOpacity onPress={() => handleRemoveFromFavorites()} style={{
                                        backgroundColor: "#ef4444", marginRight: 5,
                                        paddingHorizontal: 10, paddingVertical: 12, borderRadius: 5,
                                    }}><Text color="#fff">Remove from favorites</Text></TouchableOpacity>
                                ) :
                                    <TouchableOpacity onPress={() => handleAddToFavorites()} style={{
                                        backgroundColor: "#ef4444", marginRight: 5,
                                        paddingHorizontal: 10, paddingVertical: 12, borderRadius: 5,
                                    }}><Text color="#fff">Add to favorites</Text></TouchableOpacity>
                                }
                            </Box>
                        </Box>
                    </>
                    : <Center w="100%">
                        <VStack w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                            borderColor: "coolGray.500"
                        }} _light={{
                            borderColor: "coolGray.200"
                        }}>
                            <Skeleton h="40"/>
                            <Skeleton.Text px="4"/>
                            <Skeleton px="4" my="4" rounded="md" startColor="primary.100"/>
                        </VStack>
                    </Center>
                }
            </ScrollView>
        </>
    )
}
