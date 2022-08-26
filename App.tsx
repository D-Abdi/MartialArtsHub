import 'react-native-url-polyfill/auto';
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider} from 'native-base';
import {FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import {HomeRoute} from "./src/Routes/HomeRoute";
import {AddGymRoute} from "./src/Routes/AddGymRoute";
import FavoritesRoute from "./src/Routes/FavoritesRoute";
import {Login} from "./src/Views/Authentication/Login/Login";
import SettingsRoute from "./src/Routes/SettingsRoute";
import {supabase} from "./supabase";

const Drawer = createDrawerNavigator();

export default function App() {
    const handleLogOut = async () => {
        const { error } = await supabase.auth.signOut()
    }

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
                    <Drawer.Screen name="AddRoute" component={AddGymRoute} options={{
                        title: "Add Gym",
                        drawerIcon: () => (
                            <FontAwesome5 name="plus-circle" size={24} color="#dc2626"/>
                        ),
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                    <Drawer.Screen name="Settings" component={SettingsRoute} options={{
                        title: "Settings",
                        drawerIcon: () => (
                            <Ionicons name="settings" size={24} color="#dc2626" />
                        ),
                        drawerLabelStyle: {
                            color: "#dc2626"
                        }
                    }}/>
                    <Drawer.Screen name="LogOut" component={Login} listeners={{drawerItemPress: () => handleLogOut()}}  options={{
                        title: "Log in",
                        drawerIcon: () => (
                            <MaterialCommunityIcons name="exit-run" size={24} color="#dc2626" />
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
