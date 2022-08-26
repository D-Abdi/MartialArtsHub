import React from "react";
import {supabase} from "../../../supabase";

import {View, Text, ScrollView, useToast} from "native-base";
import {styles} from "../../Styles/Styles";
import {TextInput, TouchableOpacity} from "react-native";
import {useForm, Controller} from "react-hook-form";

export type Props = {
    navigation: any;
}

export const AddGym: React.FC<Props> = ({navigation}) => {
    const {
        control,
        handleSubmit,
    } = useForm({
        defaultValues: {
            imageUrl: "",
            disColor: "",
            name: "",
            discipline: "",
            slogan: "",
            description: "",
            locationName: "",
            distance: "",
            longitude: "",
            latitude: "",
            phone: "",
            email: "",
            website: "",
        },
    });
    const toast = useToast();

    // Add Gym to DB
    const onSubmit = async (newGym: any) => {
        const {data, error} = await supabase
            .from('gyms')
            .insert(
                [{
                    name: newGym.name,
                    imageUrl: newGym.imageUrl,
                    disColor: newGym.disColor,
                    discipline: newGym.discipline,
                    slogan: newGym.slogan,
                    description: newGym.description,
                    locationName: newGym.locationName,
                    distance: newGym.distance,
                    longitude: Number(newGym.longitude),
                    latitude: Number(newGym.latitude),
                    phone: newGym.phone,
                    email: newGym.email,
                    website: newGym.website
                }]
            )
        if (error) {
            await toast.show({
                description: `Something went wrong! Error: ${error.message}`,
                placement: "top",
                // @ts-ignore
                status: "error",
            })
        } else {
            await navigation.navigate("Home", {
                addedContent: data
            })
            await toast.show({
                description: "Gym added successfully!",
                placement: "top",
                // @ts-ignore
                status: "success"
            })
        }
    }

    return (
        <ScrollView
            _dark={{
                bg: 'coolGray.800',
                color: "#fff"
            }} _light={{
            bg: 'warmGray.50',}}
        >
            <View style={styles.addContainer}>
                <Text fontSize={16} my={2}>Gym Name</Text>
                <Controller
                    control={control}

                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Name"
                        />
                    )}
                    name="name"
                />
                <Text>Image URL</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Image URL"
                        />
                    )}
                    name="imageUrl"
                />
                <Text>Discipline</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Discipline"
                        />
                    )}
                    name="discipline"
                />
                <Text>Discipline color</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Discipline color"
                        />
                    )}
                    name="disColor"
                />
                <Text>Description</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Description"
                        />
                    )}
                    name="description"
                />
                <Text>Slogan</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Slogan"
                        />
                    )}
                    name="slogan"
                />
                <Text>Location name</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="locationName"
                        />
                    )}
                    name="locationName"
                />
                <Text>Location</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="latitude"
                        />
                    )}
                    name="latitude"
                />
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="longitude"
                        />
                    )}
                    name="longitude"
                />
                <Text>Phone</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="phone"
                        />
                    )}
                    name="phone"
                />
                <Text>Email</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Email"
                        />
                    )}
                    name="email"
                />
                <Text>Website URL</Text>
                <Controller
                    control={control}
                    // @ts-ignore
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            maxLength={100}
                            placeholder="Website URL"
                        />
                    )}
                    name="website"
                />
            </View>

            <TouchableOpacity style={styles.authBtnLog} onPress={handleSubmit(onSubmit)}>
                <Text textAlign="center">Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
