import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        width: "45%",
        },
    productBody: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image : {
        width: 100,
        height: 100,
    },
    productFooter: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productPrice: {
        fontWeight: 'bold',
        color: '#FFA451',
    },
    productButton: {
        backgroundColor: '#FFF2E7',
        padding: 5,
        borderRadius: "50%",
    },
});