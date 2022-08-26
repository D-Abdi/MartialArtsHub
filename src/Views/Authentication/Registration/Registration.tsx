import React, {useEffect, useState} from 'react'
import { TouchableOpacity} from 'react-native'
import {supabase} from "../../../../supabase";
import {Image, Input, Text, View, useToast} from "native-base";
import {Props} from "../../Home/Home";
import {styles} from "../../../Styles/Styles";

export const Registration: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast();

    // If session is present, nav to Home
    useEffect(() => {
        const session = supabase.auth.session()
        if (session) {
            navigation.navigate("Home")
        }
    }, [])

    // Save credentials to db and nav to Home
    const handleSignUp = async (email: string, password: string) => {
        const {error, user} = await supabase.auth.signUp({email, password})
        if (!error && user) {
            await toast.show({
                description: "Registration successful",
                placement: "top",
                // @ts-ignore
                status: "success"
            })
            await navigation.navigate("Home")
        }
        if (error) {
            await toast.show({
                description: `${error.message}`,
                placement: "top",
                // @ts-ignore
                status: "error"
            })
        }
    }

    return (
        <View style={styles.container}
              _dark={{
                  bg: 'coolGray.800',
                  color: "#fff"
              }} _light={{
            bg: 'warmGray.50',}}
        >
            <Image
                source={require("../../../assets/images/logo.jpg")}
                alt="image"
                width={150}
                height={150}
            />
            <Text fontSize={36} mb={2} color="#dc2626">Martial Arts Hub</Text>
            <Text fontSize={24} mb={8} color="#dc2626">Register</Text>
            <View width="90%" mb={6}>
                <Input
                    backgroundColor="#fff"
                    label="Email"
                    leftIcon={{type: 'font-awesome', name: 'envelope'}}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                />
            </View>
            <View width="90%">
                <Input
                    label="Password"
                    leftIcon={{type: 'font-awesome', name: 'lock'}}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                />
            </View>
            <View
                style={styles.authBtnContainer}
                my={8}
            >
                <TouchableOpacity
                    style={styles.authBtnLog}
                    onPress={() => handleSignUp(email, password)}
                >
                    <Text color="#fff" textAlign="center" fontSize={16}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.authBtnRegister}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text color="#dc2626" textAlign="center" fontSize={16}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
