import React from 'react';
import { View, Text, FlatList } from 'react-native';

import FavoriteItem from './FavoriteItem';

import styles from './FavoriteScreen.style';

import useFavoritesStore from "../../storage/favoritesStorage";

export default function FavoriteScreen() {
    const { favorites } = useFavoritesStore();

    if(favorites.length === 0) {
        return (
            <View style={styles.cartEmpty}>
                <Text>Your favorites is empty</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites :</Text>
            <FlatList data={favorites} renderItem={({ item }) => <FavoriteItem favoriteItem={item} />} style={styles.list} />
        </View>
    )
}