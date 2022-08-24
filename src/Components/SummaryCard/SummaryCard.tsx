import React from "react";
import {
    AspectRatio,
    Box,
    Button,
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
                        <Heading size="md" ml="-1" color="#4c1d95">
                            {gym.name}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: gym.disColor
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
                            <Button onPress={() => navToProfileHandler(gym)} backgroundColor="indigo.600" marginRight={5}>Profile</Button>
                            <Button backgroundColor="violet.900">Location</Button>
                        </Box>
                        <Text color="#4c1d95" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="400">
                            {gym.distance} <FontAwesome5 name="location-arrow" size={16} color="#8b5cf6"/>
                        </Text>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}
