import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    list : {
        flex: 1,
        padding: 10,
    },
    cartEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});