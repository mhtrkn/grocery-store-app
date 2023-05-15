
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import ShippingAddress from '../components/ShippingAddress';
import OrderSummary from '../components/OrderSummary';
import BottomContainer from '../components/BottomContainer';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { cartModalVisible } from '../redux/actions';
import { getTotalPrice } from '../utils';

const CartModal = ({ visible }) => {
    const cart = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const routePayment = () => {
        navigation.navigate('Favorite', { screen: 'Payment' })
        dispatch(cartModalVisible(false))
    }

    return (
        <Modal animationType='slide' visible={visible} style={styles.container}>
            <Header Cart={true} Modal={true} route={"Check Out"} />
            <ScrollView style={styles.scrollContainer} contentContainerStyle={{
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <View style={styles.insider}>
                    <ShippingAddress />
                    <OrderSummary />
                </View>
            </ScrollView>
            {cart.length >= 1 &&
                <BottomContainer>
                    <View style={styles.routeContainer}>
                        <TouchableOpacity onPress={routePayment} style={styles.addBtn}>
                            <Text style={styles.addText}>
                                Go to Payment
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalPriceText}>
                                {getTotalPrice()}
                            </Text>
                        </View>
                    </View>
                </BottomContainer>
            }
        </Modal>
    )
}

export default CartModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5F5',
        position: 'relative'
    },
    insider: {
        paddingVertical: '5%',
        justifyContent: 'center',
        gap: 24,
        width: '100%',
    },
    routeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowColor: '#04AC66',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .2,
        shadowRadius: 10,
    },
    totalContainer: {
        backgroundColor: 'white',
        width: '100%',
        flex: .35,
        height: '75%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalPriceText: {
        fontSize: 24,
        fontWeight: 700,
        color: '#04AC66'
    },
    scrollContainer: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#F5F5F5'
    },
    addText: {
        fontSize: 18,
        fontWeight: 800,
        color: 'white'
    },
    addBtn: {
        flexGrow: .4,
        height: '75%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#04AC66',
    },
})