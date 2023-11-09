import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    productHeader: {
        height: 250,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        backgroundColor: 'transparent',

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    listProduct: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    productBody: {
        flex: 1,
        backgroundColor: '#FFF2E7',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flexDirection: 'column',
    },
    productTitle: {
        padding: 30,
        paddingBottom: 0,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    productQuantityPrice: {
        paddingTop: 0,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFA45150',
    },
    productQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
    },
    productPrice: {
        fontWeight: 'bold',
        color: '#FFA451',
    },
    productDescription: {
        padding: 30,
        paddingTop: 0,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFA45150',
    },
    productDescriptionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        paddingTop: 30,
    },
    lastProductDescription: {
        marginBottom: 30,
    },
    productButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },
    productButtonLike: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: "50%",
        width: 50,
        alignItems: 'center',
    },
    productButtonCart: {
        backgroundColor: '#FFA451',
        padding: 20,
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    productButtonText: {
        fontWeight: 'bold',
        color: '#fff',
    },
});