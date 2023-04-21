import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProdudctDetailScreen from './src/screens/ProductDetailScreen';

export default function App() {
  return (
    <>
      {/*  */}
      {/* <ProductsScreen /> */}
      <ProdudctDetailScreen />
      {/*  */}
      <StatusBar style="auto" />
    </>
  );
}

