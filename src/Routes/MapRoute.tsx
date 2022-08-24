import React from "react"
import {Map} from "../Views/Map/Map";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const MapRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Map"
                component={Map}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default MapRoute;
