import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {

    return (
        <View style={styles.container}>
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
                numColumns={3}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );

}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    itemContainer: {
      width: "33.33%",
      padding: 1,
    },
    image: { 
      width: "100%", 
      aspectRatio: 1, 
    }
});
  