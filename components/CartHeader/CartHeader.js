import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import useCartStore from "../../storage/cartStorage";

import styles from './CartHeader.style';

export default function CartHeader() {
    const { cart } = useCartStore();
    //get navigation
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 10 }} onPress={() => navigation.navigate('cartScreen')}>
            <Feather name="shopping-cart" size={24} color="#FFA451" />
            {
              cart.length > 0
                ? <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginLeft: -10, marginTop: -10 }}>
                  <Text style={{ color: '#fff', fontSize: 12 }}>{ cart.map((item) => item.quantity).reduce((a, b) => a + b, 0) }</Text>
                </View>
                : null
            }
          </TouchableOpacity>
    )
}