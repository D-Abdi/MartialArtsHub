import React, {useEffect, useState} from "react";
import MapView from "react-native-maps";
import {AspectRatio, Box, Button, Center, HStack, Image, ScrollView, Skeleton, Text, VStack} from "native-base";
import {TouchableOpacity} from "react-native";
import {styles} from "../../Styles/Styles";

import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';

export interface Gym {
    imageUrl: string;
    disColor: string;
    name: string;
    discipline: string;
    slogan: string;
    description: string;
    location: string;
    distance: string;
}

export interface GymAndNavigation {
    gym: Gym;
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
        location: "",
        distance: ""
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
                            <Text fontStyle="italic" fontSize={22} fontWeight={600} color="rgb(0, 28, 64)"
                                  textAlign="center">"{gym.slogan}"</Text>
                            <Text fontWeight={900} fontSize={18} textAlign="center" color="rgb(0, 28, 64)">- {gym.name}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6} width={120} bg={gym.disColor} borderRadius="20px">
                            <Text paddingX={4} paddingY={2} color="#fff" textAlign="center">{gym.discipline}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text fontWeight={900} fontSize={18} color="rgb(0, 28, 64)">Description</Text>
                            <Text fontSize={12}>{gym.description}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text fontWeight={900} fontSize={18} color="rgb(0, 28, 64)">Reviews</Text>
                            <Text fontSize={12}>{gym.description}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text fontWeight={900} fontSize={18} color="rgb(0, 28, 64)">Contact</Text>
                            <Text fontSize={12}>{gym.description}</Text>
                        </Box>
                        <Box marginX={5} marginTop={6}>
                            <Text fontWeight={900} fontSize={18} color="rgb(0, 28, 64)">Location</Text>
                            <MapView style={styles.profileMap}/>
                        </Box>
                        <Box marginX={5} marginY={6}>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <Box flexDir="row" justifyContent="space-between">
                                    <Button backgroundColor="violet.900">View location</Button>
                                </Box>
                                <Text color="rgb(0, 28, 64)" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    {gym.location} {gym.distance} <FontAwesome5 name="location-arrow" size={16}
                                                                                color="rgb(0, 28, 64)"/>
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
