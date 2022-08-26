import React from "react"
import {Favorites} from "../Views/Favorites/Favorites";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export const FavoritesRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    )
}

export default FavoritesRoute;
