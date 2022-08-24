import {Dimensions, StyleSheet} from "react-native";

export const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addContainer: {
        marginHorizontal: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    profileMap: {
        width: "100%",
        height: 250
    },
    backBtn: {
        position: "absolute",
        top: 30,
        left: 30,
        zIndex: 100,
        borderWidth: 5,
        height: 75,
        width: 75,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(0, 28, 64)",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "rgb(0, 28, 64)",
        padding: 10
    },
    homeSwitchBtn: {
        position: "absolute",
        bottom: 30,
        right: 30,
        borderWidth: 5,
        height: 75,
        width: 75,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(0, 28, 64)",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "rgb(0, 28, 64)",
        padding: 10
    },
    input: {
        marginBottom: 0,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        backgroundColor: "#fff",
    },
})
