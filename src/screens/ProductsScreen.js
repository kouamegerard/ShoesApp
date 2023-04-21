import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = ({ navigation }) => {

    const product = (item) => {
        navigation.navigate('Product Detail', {
            productId: item.id
        });
        console.warn("Product: ", item.name)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={products}
                renderItem={ ({item}) => (
                <Pressable 
                    onPress={ () => product(item) }
                    style={styles.itemContainer}>
                    <Image 
                    source={{ uri: item.image }} 
                    style={styles.image}
                    />
                </Pressable>
                ) }
                numColumns={2}
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
      width: "50%",
      padding: 1,
    },
    image: { 
      width: "100%", 
      aspectRatio: 1, 
    }
});
  