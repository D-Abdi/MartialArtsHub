import {Center, Text, Button, useColorMode} from "native-base";

export const Settings = () => {
    const {
        colorMode,
        toggleColorMode
    } = useColorMode();

    return (
        <Center flex={1} _dark={{
            bg: 'coolGray.800'
        }} _light={{
            bg: 'warmGray.50'
        }}>
            <Text fontSize="lg" display="flex" mb="20">
                The active color mode is{' '}
                <Text bold fontSize="lg">
                    {colorMode}
                </Text>
            </Text>
            <Button onPress={toggleColorMode}>Toggle</Button>
        </Center>
    )
}
