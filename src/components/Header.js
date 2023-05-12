import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { CartTabIcon, FavoriteWhiteIcon, MenuIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { cartModalVisible } from '../redux/actions';
const Header = ({ cancelRoute, Cart, route, Modal, ModalClose }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const goBack = () => {
        navigation.goBack()
    }
    const visible = useSelector(state => state.cartModalVisible)

    const closeCartModal = () => {
        dispatch(cartModalVisible(visible ? false : true))
    }
    const handleRoute = ({ Cart }) => {
        if (Cart) {
            console.log('Do you want the delete?')
        } else {
            console.log('Added Favorites!')
        }
    }

    if (Modal) {
        return (
            <View style={[styles.container, { height: '12%', backgroundColor: '#04AC66' }]}>
                <View style={[styles.routeInsider, { justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }]}>
                    <TouchableOpacity onPress={ModalClose ? ModalClose : closeCartModal} style={styles.closeBtn}>
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <View style={styles.locationContainer}>
                        <View style={styles.locationBottomContainer}>
                            <Text style={[styles.routeText, { color: 'white' }]}>{route}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleRoute({ Cart: Cart ? true : false })} style={styles.favoriteBtn}>
                        {Cart ? <AntDesign name="delete" size={24} color="white" />
                            :
                            <FavoriteWhiteIcon width={28} height={24} strokeWidth={1.8} />}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    if (route) {
        return (
            <View style={styles.container}>
                <View style={styles.routeInsider}>
                    {!cancelRoute && <TouchableOpacity onPress={goBack} style={styles.goBackBtn}>
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
                    </TouchableOpacity>}
                    <View style={styles.locationContainer}>
                        <View style={styles.locationBottomContainer}>
                            <Text style={styles.routeText}>{route}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.insider}>
                <TouchableOpacity style={styles.menuIcon}>
                    <MenuIcon />
                </TouchableOpacity>
                <View style={styles.locationContainer}>
                    <Text style={{ fontWeight: 500 }}>Location</Text>
                    <View style={styles.locationBottomContainer}>
                        <Ionicons name="location-sharp" size={18} color="#444" />
                        <Text style={styles.locationText}>Istanbul, Turkey</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="#444" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={closeCartModal} style={styles.avatarBtn}>
                    <CartTabIcon width={30} height={30} stroke="#444" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'fixed',
        width: '100%',
        height: '13%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 0,
        paddingBottom: 12,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 5,
    },
    insider: {
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    routeInsider: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 4,
    },
    locationBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    locationContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    menuIcon: {
        width: 36,
        height: 36,
    },
    avatarBtn: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationText: {
        fontSize: 16,
        fontWeight: 700,
        color: '#444'
    },
    routeText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#444',
    },
    closeBtn: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 8,
        width: 40,
        height: 40,
    },
    favoriteBtn: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    goBackBtn: {
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 8,
        shadowColor: "#444",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 5,
    }
})