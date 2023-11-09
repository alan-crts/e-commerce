import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useCartStore from "../../storage/cartStorage";
import { Feather } from '@expo/vector-icons';
import Image from 'react-native-image-progress';

import styles from './CartItem.style';
import { useNavigation } from '@react-navigation/native';

export default function CartItem({ item }) {
    const { removeFromCart, updateQuantity } = useCartStore();
    const navigation = useNavigation();

    return (
        <View style={styles.cartItem} key={item.id}>
            <View style={styles.cartFirstBlock}>
                <TouchableOpacity style={styles.cartItemProduct} onPress={() => {
                    navigation.pop();
                    navigation.navigate('ProductScreen', { product: item.product })
                }}>
                    <Image source={{ uri: item.product.image }} style={styles.cartItemImage} resizeMode="contain" />
                    <Text style={styles.cartItemTitle}>{item.product.title}</Text>
                </TouchableOpacity>
                <View style={styles.cartItemPriceContainer}>
                    <Text style={styles.cartItemPrice}>${item.product.price}</Text>
                </View>
            </View>
            <View style={styles.cartItemOption}>
                <View style={styles.changeQuantity}>
                    <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity - 1)} style={styles.cartItemOptionButton} disabled={item.quantity === 1}>
                        <Feather name="minus" size={24} color="#FFA451" />
                    </TouchableOpacity>
                    <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateQuantity(item.product.id, item.quantity + 1)} style={styles.cartItemOptionButton}>
                        <Feather name="plus" size={24} color="#FFA451" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => removeFromCart(item.product.id)} style={styles.cartItemOptionButton}>
                    <Feather name="trash-2" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    )
}