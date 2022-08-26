import 'react-native-url-polyfill/auto';
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider} from 'native-base';
import {FontAwesome5, MaterialIcons} from '@expo/vector-icons';

import {HomeRoute} from "./src/Routes/HomeRoute";
import {AddGymRoute} from "./src/Routes/AddGymRoute";
import {MapRoute} from "./src/Routes/MapRoute";
import FavoritesRoute from "./src/Routes/FavoritesRoute";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="HomeRoute" component={HomeRoute} options={{
                        title:"Home",
                        drawerIcon: () => (
                            <FontAwesome5 name="home" size={24} color="#dc2626"/>
                        ),
                        drawerItemStyle: {
                            marginTop: 30,
                            backgroundColor: "white"
                        },
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                    <Drawer.Screen name="FavoritesRoute" component={FavoritesRoute} options={{
                        title:"Favorites",
                        drawerIcon: () => (
                            <MaterialIcons name="favorite" size={24} color="#dc2626"/>
                        ),
                        drawerItemStyle: {
                            backgroundColor: "white"
                        },
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                    <Drawer.Screen name="MapRoute" component={MapRoute} options={{
                        title: "Map",
                        drawerIcon: () => (
                            <FontAwesome5 name="map-marked-alt" size={24} color="#dc2626"/>
                        ),
                        drawerItemStyle: {
                            backgroundColor: "white"
                        },
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                    <Drawer.Screen name="AddRoute" component={AddGymRoute} options={{
                        title: "Add Gym",
                        drawerIcon: () => (
                            <FontAwesome5 name="plus-circle" size={24} color="#dc2626"/>
                        ),
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
