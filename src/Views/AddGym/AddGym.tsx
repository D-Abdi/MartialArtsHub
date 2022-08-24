import React from "react";
import { View, Text} from "native-base";
import {styles} from "../../Styles/Styles";
import {TextInput} from "react-native";
import {useForm, Controller} from "react-hook-form";

export type Props = {
    navigation: any;
}

export const AddGym: React.FC<Props> = ({navigation}) => {
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            name: "",
            value: null,
        },
    });

    const switchToMapHandler = async () => {
        await navigation.navigate("Map");
    }

    return (
        <View style={styles.addContainer}>
            <Text>Gym Name</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
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
            <Text>Gym Name</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
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
        </View>
    )
}
