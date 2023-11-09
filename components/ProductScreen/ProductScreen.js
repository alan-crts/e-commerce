import React from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import Image from 'react-native-image-progress';
import { FontAwesome } from '@expo/vector-icons';

import useCartStore from "../../storage/cartStorage";
import useFavoritesStore from "../../storage/favoritesStorage";
import styles from './ProductScreen.style';

export default function ProductScreen({ route, navigation }) {
    const [quantity, setQuantity] = React.useState(1);
    const { product } = route.params;

    const { addToFavorites, removeFromFavorites, favorites } = useFavoritesStore();
    const { addToCart } = useCartStore();

    navigation.setOptions({ 
        title: "",
        backgroundColor: '#fff',
        headerTintColor: '#FFA451',
        headerShadowVisible: false, // applied here
        headerBackTitle : 'Back',
    });
    return (
        <View style={styles.container}>
            <View style={styles.productHeader}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.productBody}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <View style={styles.productQuantityPrice}>
                    <View style={styles.productQuantity}>
                        <TouchableOpacity onPress={() => { if (quantity > 1) setQuantity(quantity - 1) }}>
                            <FontAwesome name="minus" size={24} color="#FFA451" />
                        </TouchableOpacity>
                        <Text>{quantity}</Text>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                            <FontAwesome name="plus" size={24} color="#FFA451" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.productPrice}>${product.price}</Text>
                </View>
                <ScrollView style={styles.productDescription}>
                    <Text style={styles.productDescriptionTitle}>Description :</Text>
                    <Text>{product.description}</Text>
                    <Text style={styles.productDescriptionTitle}>Category :</Text>
                    <Text style={styles.lastProductDescription}>{product.category}</Text>
                </ScrollView>
                <View style={styles.productButtonContainer}>
                    <TouchableOpacity style={styles.productButtonLike} onPress={() => {
                        const productInFavorites = favorites.find((item) => item.product.id === product.id);
                        if (productInFavorites) {
                            removeFromFavorites(product.id);
                        } else {
                            addToFavorites(product);
                        }
                    }}>
                        <FontAwesome name={ favorites.find((item) => item.product.id === product.id) ? "heart" : "heart-o"} size={24} color="#FFA451" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productButtonCart} onPress={() => addToCart(product, quantity)}>
                        <Text style={styles.productButtonText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}