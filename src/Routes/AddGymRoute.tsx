import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {AddGym} from "../Views/AddGym/AddGym";

const Stack = createNativeStackNavigator();

export const AddGymRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_bottom"
            }}
        >
            <Stack.Screen
                name="Add Gym"
                component={AddGym}
                options={({navigation}) => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}
