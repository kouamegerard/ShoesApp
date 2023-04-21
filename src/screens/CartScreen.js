import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const CartItemsList = () => (
    <View style={styles.cartTotal}>
        <View style={styles.cartTotalRow}>
            <Text style={styles.cartTotalText}>Subtotal</Text>
            <Text style={styles.cartTotalText}>96 000CFA</Text>
        </View>
        <View style={styles.cartTotalRow}>
            <Text style={styles.cartTotalText}>Delevery</Text>
            <Text style={styles.cartTotalText}>2 000CFA</Text>
        </View>
        <View style={styles.cartTotalRow}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>98 000CFA</Text>
        </View>
    </View>
);

const CartScreen = () => {

    return (
        <>
            <FlatList 
                data={cart}
                renderItem={ ({item}) => (
                    <CartListItem cartItem={item}/>
                ) }
                ListFooterComponent={ CartItemsList }
            />

            {/* Add to cart Content */}
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    );

}

export default CartScreen;

const styles = StyleSheet.create({
    container: {},
    cartTotal: {
        margin: 20,
    },
    cartTotalRow: {
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderStyle: "dashed",
        borderColor: "#595959",
    },
    cartTotalText: {
        fontSize: 15,
        color: '#595959',
    },
    total: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#191919',
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