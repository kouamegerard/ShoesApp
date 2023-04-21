import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import productsSlice from '../store/slicers/productsSlice';

const ProductsScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const product = (item) => {
        dispatch(productsSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('Product Detail', {
            productId: item.id
        });
    }

    // @ts-ignore
    const products = useSelector( (state) => state.products.products );

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
  