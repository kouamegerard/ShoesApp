import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {

    return(
        <FlatList 
            data={products}
            renderItem={ ({item}) => (
            <View style={styles.itemContainer}>
                <Image 
                source={{ uri: item.image }} 
                style={styles.image}
                />
            </View>
            ) }
            numColumns={4}
        />
    );

}

export default ProductsScreen;

const styles = StyleSheet.create({
    itemContainer: {
      width: "25%",
      padding: 1,
    },
    image: { 
      width: "100%", 
      aspectRatio: 1, 
    }
});
  