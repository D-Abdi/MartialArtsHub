import React, {useEffect} from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import {Text, View} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {useColorMode} from "native-base";

export type Props = {
    showBars: boolean,
    title: string,
    navigation: any,
}

const AppHeader: React.FC<Props> = ({showBars, title, navigation}) => {
    const {
        colorMode
    } = useColorMode();

    return (
        <View style={styles.titleWrapper}
              _dark={{
                  bg: 'coolGray.800',
                  color: "#fff"
              }} _light={{
            bg: 'warmGray.50',
            color: "#000"
        }}
        >
            {showBars ? (
                <TouchableOpacity
                    style={styles.bars}
                    onPress={() => navigation.openDrawer()}
                >
                    <AntDesign name="bars" size={36} color="white"/>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.bars}
                >
                    <Ionicons name="arrow-back-circle" size={40} color="white"/>
                </TouchableOpacity>
            )}
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    titleWrapper: {
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 24,
        alignContent: "center",
        marginLeft: 10,
    },
    bars: {},
});

export default AppHeader;
