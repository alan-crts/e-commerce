import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './ProductCard.style'
import Image from 'react-native-image-progress';

import useCartStore from "../../storage/cartStorage";

export default function ProductCard({ product, navigation }) {
    const { addToCart } = useCartStore();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductScreen', { product })}>
            <View style={styles.productBody}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                </View>
                <Text>{product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}</Text>
            </View>

            <View style={styles.productFooter}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <TouchableOpacity style={styles.productButton} onPress={() => addToCart(product, 1)}>
                    <Feather name="plus" size={24} color="#FFA451" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}