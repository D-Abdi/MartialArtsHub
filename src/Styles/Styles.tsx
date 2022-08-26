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
        backgroundColor: "#7f1d1d",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "#7f1d1d",
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
        backgroundColor: "#7f1d1d",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "#7f1d1d",
        padding: 10
    },
    input: {
        marginBottom: 0,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    authBtnContainer: {
        width: "100%",
      display: "flex",
        alignItems: "center",
        textAlign: "center"
    },
    authBtnLog: {
        width: 200,
        height: 50,
        marginBottom: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#dc2626",
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "#dc2626",
    },
    authBtnRegister: {
        width: 200,
        height: 50,
        marginBottom: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#dc2626",
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "#fff",
    }
})
