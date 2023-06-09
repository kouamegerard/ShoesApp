import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../store/slicers/cartSlice";


const ProdudctDetailScreen = () => {

    // @ts-ignore
    const product = useSelector( (state) => state.products.selectedProduct );
    const dispatch = useDispatch();

    const { width } = useWindowDimensions();

    const addToCart = () => {
        dispatch( cartSlice.actions.addCartItem({ product }));
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {/* Image Carousel */}
                <FlatList 
                    data={product.images}
                    renderItem={ ({ item }) => (
                        <Image 
                            source={{ uri: item }}
                            style={{ width: width, aspectRatio: 1 }}
                        />
                    ) }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                
                <View style={{ padding: 20, }}>
                    {/* Title Content */}
                    <Text style={styles.title}>{product.name}</Text>
                    
                    {/* Price Content */}
                    <Text style={styles.price}>{product.price}CFA</Text>
                    {/* Description Content */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>

            </ScrollView>
            {/* Add to cart Content */}
            <Pressable 
                onPress={addToCart}
                style={styles.button}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>

            {/* Navigation Content */}

        </View>
    );

};

export default ProdudctDetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 1.5
    },
    description: {
        fontSize: 18,
        fontWeight: "300",
        lineHeight: 28,
        marginVertical: 10,
    },
    button: {
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 22,
        padding: 18,
        borderRadius: 50,
        width: "90%",
        backgroundColor: "#000000",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FFFFFF",
    },
  });