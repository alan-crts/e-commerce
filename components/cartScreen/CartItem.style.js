import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 5,
        elevation: 5,
    },
    cartFirstBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartItemImage: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
        marginRight: 15,
    },
    cartItemOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    cartItemOptionButton: {
        borderRadius: 50,
    },
    cartItemProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cartItemTitle: {
        fontSize: 12,
    },
    cartItemPriceContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartItemPrice: {
        fontWeight: 'bold',
        color: '#FFA451',
    },
    changeQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cartItemQuantity: {
        marginHorizontal: 10,
        width: 20,
        textAlign: 'center',
    },
});