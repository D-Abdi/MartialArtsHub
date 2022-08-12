import {AspectRatio, Box, Center, Heading, HStack, Image, Stack, Text} from "native-base";
import React from "react";

import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
    imageUrl: string;
    disColor: string;
    name: string;
    discipline: string;
    slogan: string;
    description: string;
    location: string;
    distance: string;
}

export const SummaryCard: React.FC<Props> = (
    {imageUrl, disColor, name, discipline, slogan, description, location, distance}
) => {
    return (
        <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
                            uri: imageUrl
                        }} alt="image"/>
                    </AspectRatio>
                    <Center bg={disColor} _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        {discipline}
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {name}
                        </Heading>
                        <Text fontSize="xs" _light={{
                            color: disColor
                        }} _dark={{
                            color: disColor
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            {slogan}
                        </Text>
                    </Stack>
                    <Text fontWeight="400">
                        {description}
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">

                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                {location}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                {distance} <FontAwesome5 name="location-arrow" size={16} color="black" />
                            </Text>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}
