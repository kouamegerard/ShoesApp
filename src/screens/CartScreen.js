// @ts-nocheck
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import { delivery, selectSubtotal } from "../store/slicers/cartSlice";

const CartItemsList = () => {
    const subtotal = useSelector( selectSubtotal );
    const isFreeDelivery = useSelector( delivery );
    const total = subtotal + isFreeDelivery;

    return (
        <View style={styles.cartTotal}>
            <View style={styles.cartTotalRow}>
                <Text style={styles.cartTotalText}>Subtotal</Text>
                <Text style={styles.cartTotalText}>{subtotal}CFA</Text>
            </View>
            <View style={styles.cartTotalRow}>
                <Text style={styles.cartTotalText}>Delevery</Text>
                <Text style={styles.cartTotalText}>{isFreeDelivery}CFA</Text>
            </View>
            <View style={styles.cartTotalRow}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>{total}CFA</Text>
            </View>
        </View>
    )
};

const EmptyCart = () => {
    return (
        <View style={styles.cartTotal}>
            <Text style={{ fontSize: 22, fontWeight: "600", }}>Your cart is empty</Text>
        </View>
    )
};

const CartScreen = () => {
    const cartItems = useSelector( (state) => state.cart.items );
    console.log(cartItems.length);

    return (
        <>
            <FlatList 
                data={cartItems}
                renderItem={ ({item}) => (
                    <CartListItem cartItem={item}/>
                ) }
                ListEmptyComponent={EmptyCart}
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