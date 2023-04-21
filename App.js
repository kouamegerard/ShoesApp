import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProdudctDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import NavigationScreens from './src/navigation/NavigationScreens';
import { Provider } from "react-redux";
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      {/*  */}
      <NavigationScreens />
      {/*  */}
      <StatusBar style="auto" />
    </Provider>
  );
}

