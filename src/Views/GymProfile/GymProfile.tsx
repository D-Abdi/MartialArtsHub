import React, {useEffect, useState} from "react";
import MapView from "react-native-maps";
import {AspectRatio, Box, Button, Center, HStack, Image, ScrollView, Skeleton, Stack, Text, VStack} from "native-base";
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";

import {AntDesign, FontAwesome,FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';

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
    location: number[];
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
        location: [],
        reviews: [{rating: null, review: null, name: null}],
        rating: null,
        phone: "",
        email: "",
        website: ""
    });
    useEffect(() => {
        console.log(route?.params?.gym, "PARAMS")
        if (route?.params?.gym !== null && route?.params?.gym !== undefined) {
            setGym(route.params.gym);
            console.log(gym, "Gym profile")
            navigation.setParams({
                gym: null
            })
        }
    }, [])

    return (
        <>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                    styles.backBtn,
                ]}
            >
                <AntDesign name="leftcircle" size={30} color="#8b5cf6"/>
            </TouchableOpacity>
            <ScrollView>
                {gym.imageUrl !== "" ?
                    <>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: gym.imageUrl,
                            }} alt="image"/>
                        </AspectRatio>
                        <Box marginTop={6}>
                            <Text fontStyle="italic" fontSize={22} fontWeight={600} color="#7c3aed"
                                  textAlign="center">"{gym.slogan}"</Text>
                            <Text fontWeight={900} fontSize={18} textAlign="center"
                                  color="#7c3aed">- {gym.name}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6} width={120} bg={gym.disColor} borderRadius="20px">
                            <Text paddingX={4} paddingY={2} color="#fff" textAlign="center">{gym.discipline}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#7c3aed">Description</Text>
                            <Text fontSize={12}>{gym.description}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#7c3aed">Reviews</Text>
                            <VStack space={5}>
                                {gym.reviews.map((item, index) => (
                                    <>
                                    <Stack key={index} direction="row" mt={1.5} space={4}>
                                        <Text maxW={250} fontStyle="italic" fontWeight={400} color="light.500">"{item.review}"</Text>
                                        <Text maxW={150}>- {item.name}</Text>
                                        <Text maxW={150} fontWeight={600}>{item.rating} <AntDesign name="star" size={18} color="gold" /></Text>
                                    </Stack>
                                    </>
                                ))}
                            </VStack>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#7c3aed">Contact</Text>
                            <HStack space={3} mt={2}>
                                <Stack direction="column" space={3}>
                                    <FontAwesome name="phone" size={24} color="#0ea5e9" />
                                    <Ionicons name="mail" size={24} color="#0ea5e9" />
                                    <Foundation name="web" size={24} color="#0ea5e9" />
                                </Stack>
                                        <Stack direction="column" space={4}>
                                            <Text maxW={500} color="#0ea5e9">{gym.phone}</Text>
                                            <Text maxW={500} color="#0ea5e9">{gym.email}</Text>
                                            <Text maxW={500} color="#0ea5e9">{gym.website} </Text>
                                        </Stack>
                            </HStack>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text mb={5} fontWeight={900} fontSize={18} color="#7c3aed">Location</Text>
                            <MapView style={styles.profileMap}/>
                        </Box>
                        <Box marginX={5} marginY={6}>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <Box flexDir="row" justifyContent="space-between">
                                    <Button backgroundColor="violet.900">View location</Button>
                                </Box>
                                <Text color="#7c3aed" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {gym.locationName} {gym.distance} <FontAwesome5 name="location-arrow" size={16}
                                                                                    color="#7c3aed"/>
                                </Text>
                            </HStack>
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
