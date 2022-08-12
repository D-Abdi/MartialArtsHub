import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../Views/Home/Home";
import {Map} from "../Views/Map/Map";

const Stack = createNativeStackNavigator();

export default function HomeRoute() {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={() => ({
                   headerShown: false,
                })}
            />
            <Stack.Screen
                name="Home"
                component={Map}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}
