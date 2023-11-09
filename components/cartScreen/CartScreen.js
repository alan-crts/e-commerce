import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import CartItem from './CartItem';
import { Feather } from '@expo/vector-icons';

import useCartStore from "../../storage/cartStorage";

import styles from './CartScreen.style';

export default function CartScreen({ navigation }) {
    const { cart, clearCart } = useCartStore();

    navigation.setOptions({
        headerRight: () => null,
        title: 'Cart',
        headerTitleStyle: {
            color: 'white',
        },
        headerStyle: {
            backgroundColor: '#FFA451',
        },
    });

    if(cart.length === 0) {
        return (
            <View style={styles.cartEmpty}>
                <Text style={styles.title}>Your cart is empty</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={cart} renderItem={({ item }) => <CartItem item={item} />} style={styles.listProduct} /><View style={styles.cartFooter}>
                <View>
                    <Text>Total:</Text>
                    <Text style={styles.cartFooterPriceText}>${cart.map((item) => item.product.price * item.quantity).reduce((a, b) => a + b, 0).toFixed(2)}</Text>
                </View>

                <View style={styles.cartFooterButtonContainer}>
                    <TouchableOpacity style={styles.cartFooterButtonIcon} onPress={() => {
                        clearCart()
                        navigation.pop()
                    }}>
                        <Feather name="trash-2" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartFooterButton}>
                        <Text style={styles.cartFooterButtonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}