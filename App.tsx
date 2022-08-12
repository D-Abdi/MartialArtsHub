import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider} from 'native-base';
import HomeRoute from "./src/Routes/HomeRoute";

import {FontAwesome5} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="HomeRoute" component={HomeRoute} options={{
                        title: "Home",
                        drawerIcon: () => (
                            <FontAwesome5 name="home" size={24} color="black"/>
                        ),
                        drawerItemStyle: {
                            marginTop: 30,
                            backgroundColor: "white"
                        },
                        drawerLabelStyle: {
                            color: "black"
                        }
                    }}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
