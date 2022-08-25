import React from "react";
import {
    AspectRatio,
    Box,
    Center,
    Heading,
    HStack,
    Image,
    Stack,
    Text
} from "native-base";

import {
    FontAwesome5
} from '@expo/vector-icons';

import {
    Gym,
} from "../../Views/GymProfile/GymProfile";
import {TouchableOpacity} from "react-native";

interface SummaryCard {
    gym: Gym,
    navigation: any;
}

export const SummaryCard: React.FC<SummaryCard> = (
    {navigation, gym},
    ) => {

    const navToProfileHandler = async (gym: Gym) => {
        await navigation.navigate("GymProfile", {
            gym: gym
        });
    }

    const navToMapHandler = async (gym: Gym) => {
        await navigation.navigate("Map", {
            gym: gym
        })
    }

    return (
        <Box alignItems="center">
            <Box
                maxW="80"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: gym.imageUrl
                        }} alt="image"/>
                    </AspectRatio>
                    <Center
                        bg={gym.disColor}
                        _dark={{
                        bg: "violet.500"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        {gym.discipline}
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" color="#991b1b">
                            {gym.name}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: "#991b1b"
                        }} _dark={{
                            color: gym.disColor
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {gym.slogan}
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        {gym.description}
                    </Text>
                    <Stack>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            {gym.locationName}
                        </Text>
                    </Stack>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <Box flexDir="row" justifyContent="space-between">
                            <TouchableOpacity onPress={() => navToProfileHandler(gym)} style={{backgroundColor: "#ef4444", marginRight: 5,
                                paddingHorizontal: 10, paddingVertical: 12, borderRadius: 5,}}><Text color="#fff">Profile</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => navToMapHandler(gym)} style={{backgroundColor: "#991b1b", marginRight: 5,
                                paddingHorizontal: 10, paddingVertical: 12, borderRadius: 5,}}><Text color="#fff">Location</Text></TouchableOpacity>
                        </Box>
                        <Text color="#dc2626" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            {gym.distance} <FontAwesome5 name="location-arrow" size={16} color="#dc2626"/>
                        </Text>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}
