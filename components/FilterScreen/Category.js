import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

import styles from './Category.style';

import useFilterStore from '../../storage/filterStorage';

export default function Category({ item }) {
    const { categories, addToCategory, removeFromCategory } = useFilterStore();

    const [isSelected, setSelection] = React.useState(categories.includes(item));

    React.useEffect(() => {
        if (isSelected) {
            addToCategory(item);
        } else {
            removeFromCategory(item);
        }
    }, [isSelected]);

    return (
        <View style={styles.category}>
            <Text style={styles.categoryText}>{item}</Text>
            <Checkbox style={styles.checkbox} value={isSelected} onValueChange={setSelection} color="#FFA451" />
        </View>
    );
}