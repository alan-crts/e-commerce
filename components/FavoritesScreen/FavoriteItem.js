import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Image from 'react-native-image-progress';

import { useNavigation } from '@react-navigation/native';

import styles from './FavoriteItem.style';

import useFavoritesStore from "../../storage/favoritesStorage";

export default function FavoriteItem({ favoriteItem }) {
    const { removeFromFavorites } = useFavoritesStore();
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ProductScreen", { product: favoriteItem.product })}>
            <View style={styles.infoContainer}>
                <Image source={{ uri: favoriteItem.product.image }} style={styles.image} resizeMode="contain" />
                <View style={styles.info}>
                    <Text style={styles.name}>{favoriteItem.product.title}</Text>
                    <Text style={styles.price}>${favoriteItem.product.price}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonIcon} onPress={() => removeFromFavorites(favoriteItem.product.id)}>
                <FontAwesome name="trash-o" size={24} color="red" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}