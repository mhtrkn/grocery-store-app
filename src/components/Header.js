import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FavoriteWhiteIcon, MenuIcon, NotificationIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
const Header = ({ route, Modal, ModalClose }) => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.goBack()
    }
    if (Modal) {
        return (
            <View style={[styles.container, { height: '12%', backgroundColor: '#04AC66' }]}>
                <View style={styles.routeInsider}>
                    <TouchableOpacity onPress={ModalClose} style={styles.closeBtn}>
                        <Ionicons name="close" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Added favorites')} style={styles.favoriteBtn}>
                        <FavoriteWhiteIcon width={28} height={24} strokeWidth={1.8} />
                    </TouchableOpacity>
                    <View style={styles.locationContainer}>
                        <View style={styles.locationBottomContainer}>
                            <Text style={[styles.routeText, { color: 'white' }]}>{route}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    if (route) {
        return (
            <View style={styles.container}>
                <View style={styles.routeInsider}>
                    <TouchableOpacity onPress={goBack} style={styles.goBackBtn}>
                        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
                    </TouchableOpacity>
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
                        <Ionicons name="location-sharp" size={18} color="#333" />
                        <Text style={styles.locationText}>Istanbul, Turkey</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.avatarBtn}>
                    <NotificationIcon width={24} height={24} strokeWidth={.6} />
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
        color: '#333'
    },
    routeText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#333',
    },
    closeBtn: {
        position: 'absolute',
        left: 0,
        bottom: -5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    favoriteBtn: {
        position: 'absolute',
        right: 0,
        bottom: -5,
        alignItems: 'center',
        justifyContent: 'center',
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
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 5,
    }
})