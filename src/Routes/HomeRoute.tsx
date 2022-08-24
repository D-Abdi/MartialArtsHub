import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Home} from "../Views/Home/Home";
import {Map} from "../Views/Map/Map";
import {GymProfile} from "../Views/GymProfile/GymProfile"

const Stack = createNativeStackNavigator();

export const HomeRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({navigation}) => ({
                   headerShown: false,
                })}
            />
            <Stack.Screen
                name="Map"
                component={Map}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="GymProfile"
                component={GymProfile}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}
