import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProdudctDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import { Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "../store/slicers/cartSlice";

const Stack = createNativeStackNavigator();

const MiniCart = ({navigation, numberOfItems}) => {
    return <Pressable
        style={{ flexDirection: "row", alignItems: "flex-start" }}
        onPress={ () =>  navigation.navigate("Cart")}
    >
        <FontAwesome5 
            name="shopping-cart"
            size={18}
            color="#CBCBCB"
        />
        <Text style={{ color: "#F00", fontSize: 13, fontWeight: "500", alignSelf: "center", position: "absolute", right: -2, top: -5, }}>{numberOfItems}</Text>
    </Pressable>
}


const NavigationScreens = () => {

    const numberOfItems = useSelector(selectNumberOfItems)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Products" 
                    component={ProductsScreen} 
                    options={({navigation}) => ({
                        headerRight: () => ( <MiniCart navigation={navigation} numberOfItems={numberOfItems} /> ),
                    }) }
                />
                <Stack.Screen 
                    name="Product Detail" 
                    component={ProdudctDetailScreen} 
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default NavigationScreens;