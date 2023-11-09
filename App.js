import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListProductScreen from './components/ListProductScreen/ListProductScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';
import CartScreen from './components/cartScreen/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FilterScreen from './components/FilterScreen/FilterScreen';

import { FontAwesome } from '@expo/vector-icons';

import CartHeader from './components/CartHeader/CartHeader';
import FavoriteScreen from './components/FavoritesScreen/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FFA451',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }}>
      <Tab.Screen name="Home" component={ListProductScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="heart" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerRight: () => (
          <CartHeader />
        ),
      }}>
        <Stack.Screen name="eCommerce" component={Tabs} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="cartScreen" component={CartScreen} />
          <Stack.Screen name="Filter" component={FilterScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

