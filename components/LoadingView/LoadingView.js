import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function LoadingView() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FFA451" />
        </View>
    )
}