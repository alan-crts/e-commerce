import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

import Category from './Category';

import { useNavigation } from '@react-navigation/native';
import useFilterStore from '../../storage/filterStorage';

import styles from './FilterScreen.style';

export default function FilterScreen() {
    const { categories, setSort, sort } = useFilterStore();
    const navigation = useNavigation();

    const [filter, setFilter] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getAllCategory = async () => {
        setLoading(true);
        try {
            const request = await fetch('https://fakestoreapi.com/products/categories')
            const json = await request.json()

            setFilter(json)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

    navigation.setOptions({
        headerRight: () => null,
        title: 'Filter',
        headerTitleStyle: {
            color: 'white',
        },
        headerStyle: {
            backgroundColor: '#FFA451',
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sort by :</Text>
            <View style={styles.sort}>
                <RNPickerSelect onValueChange={(value) => setSort(value)} value={sort} items={[{ label: 'Price: Low to High', value: 'low' }, { label: 'Price: High to Low', value: 'high' }, { label: 'Name: A to Z', value: 'a' }, { label: 'Name: Z to A', value: 'z' }]} placeholder={{ label: 'Select a sort', value: null }} />
            </View>
            <Text style={styles.title}>Category :</Text>
            {
                isLoading
                ? <Text>Loading...</Text>
                : <FlatList data={filter} renderItem={({ item }) => <Category item={item} />} />
            }
        </View>
    );
}