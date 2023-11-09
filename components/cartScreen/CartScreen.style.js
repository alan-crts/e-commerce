import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    listProduct: {
        flex: 1,
        paddingTop: 20,
        padding: 20,
    },
    cartFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 15,
        paddingBottom: 30,
        borderTopWidth: 1,
        borderTopColor: '#FFA45150',
    },
    cartFooterButtonContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartFooterButtonIcon: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 50,
    },
    cartFooterButton: {
        backgroundColor: '#FFA451',
        padding: 13,
        borderRadius: 50,
        marginLeft: 10,
    },
    cartFooterButtonText : {
        color: '#fff',
        fontWeight: 'bold',
    },
    cartEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartFooterPriceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFA451',
    },
});