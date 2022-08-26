import React, {useEffect, useState} from 'react'
import { TouchableOpacity} from 'react-native'
import {supabase} from "../../../../supabase";
import {Image, Input, Text, useToast, View} from "native-base";
import {Props} from "../../Home/Home";
import {styles} from "../../../Styles/Styles";

export const Login: React.FC<Props> = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast();

    useEffect(() => {
        const session = supabase.auth.session()
        if (session) {
            navigation.navigate("Home")
        }
    }, [])

    const handleLogin = async (email: string, password: string) => {
        const {error, user} = await supabase.auth.signIn({email, password})
        if (!error && user) {
            await toast.show({
                description: "Login successful!",
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
        <View style={styles.container}>
                <Image
                    source={require("../../../assets/images/logo.jpg")}
                    alt="image"
                    width={150}
                    height={150}
                />
            <Text fontSize={36} mb={2} color="#dc2626">Martial Arts Hub</Text>
            <Text fontSize={24} mb={8} color="#dc2626">Login</Text>
            <View width="90%" mb={6} >
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
                    onPress={() => handleLogin(email, password)}
                >
                    <Text color="#fff" textAlign="center" fontSize={16}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.authBtnRegister}
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text color="#dc2626" textAlign="center" fontSize={16}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
