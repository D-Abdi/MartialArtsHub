import React, {useEffect, useState} from "react";
import {AspectRatio, Box, Center, Image, Skeleton, Text, VStack} from "native-base";

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

export const GymProfile: React.FC<GymAndNavigation> = ({ navigation, route }) => {
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
        <Box>
            {gym.imageUrl !== "" ?
                <>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: gym.imageUrl,
                        }} alt="image"/>
                    </AspectRatio>
                    <Box marginTop={6}>
                        <Text fontStyle="italic" fontSize={22} fontWeight={600} textAlign="center">"{gym.slogan}"</Text>
                    </Box>
                    <Box marginX={5} marginTop={6}>
                        <Text fontWeight={900} fontSize={18}>Description</Text>
                        <Text fontSize={12}>{gym.description}</Text>
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
        </Box>
    )
}
