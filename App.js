import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProdudctDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';

export default function App() {
  return (
    <>
      {/*  */}
      {/* <ProductsScreen /> */}
      {/* <ProdudctDetailScreen /> */}
      <CartScreen />
      {/*  */}
      <StatusBar style="auto" />
    </>
  );
}

