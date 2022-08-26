import React from "react"
import {Settings} from "../Views/Settings/Settings"

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const SettingsRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Map"
                component={Settings}
                options={() => ({
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "red"
                    }
                })}
            />
        </Stack.Navigator>
    )
}

export default SettingsRoute;
