import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    name: {
        fontWeight: 'bold',
        paddingRight: 10,
    },
    info: {
        flex: 1,
        flexDirection: 'column',
    },
    price: {
        fontWeight: 'bold',
        marginTop: 10,
        color: '#FFA451',
    },
});