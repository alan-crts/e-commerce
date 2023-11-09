import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './ListProductScreen.style';

import ProductCard from './ProductCard';
import useFilterStore from '../../storage/filterStorage';

export default function ListProductScreen() {
    const navigation = useNavigation();

    const { categories, sort } = useFilterStore();

    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    const getAllProduct = async () => {
        setLoading(true);
        try {
            const request = await fetch('https://fakestoreapi.com/products')
            const json = await request.json()

            setProduct(json)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchAndFilter}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder="Search..." onChangeText={text => setSearch(text)} value={search} />
                    {
                        search !== '' ?
                        <TouchableOpacity style={styles.button} onPress={() => setSearch('')}>
                            <FontAwesome name="times" size={24} color="black" style={styles.icon} />
                        </TouchableOpacity>
                        : null
                    }
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filter')}>
                    <FontAwesome name="filter" size={24} color="#FFA451" style={styles.icon} />
                </TouchableOpacity>
            </View>
                <FlatList 
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getAllProduct} />}
                data={
                    product
                    .filter(item => item.title.toLowerCase().includes(search.trim().toLowerCase()))
                    .filter(item => categories.length === 0 || categories.includes(item.category))
                    .sort((a, b) => {
                        if (sort === 'low') {
                            return a.price - b.price;
                        } else if (sort === 'high') {
                            return b.price - a.price;
                        } else if (sort === 'a') {
                            return a.title.localeCompare(b.title);
                        } else if (sort === 'z') {
                            return b.title.localeCompare(a.title);
                        } else {
                            return 0;
                        }
                    })
                } renderItem={({ item }) => <ProductCard product={item} navigation={navigation}
                />} scrollEnabled={true} numColumns={2} />
        </View>
    );
}