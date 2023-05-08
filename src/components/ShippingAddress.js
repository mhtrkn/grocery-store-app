import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';

const ShippingAddress = () => {
    return (
        <View style={styles.direction}>
            <Text style={styles.headerText}>Shipping Address</Text>
            <View style={styles.container}>
                <View style={styles.insider}>
                    <View style={styles.iconContainer}>
                        <SimpleLineIcons name="location-pin" size={24} color="#04AC66" />
                    </View>
                    <Text style={styles.addressText}>
                        Mehmet Türkan{"\n"}Tevfikbey mah. 1.Cevahir sk. No:47 D:33{"\n"}+90 (533) 597 8515
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ShippingAddress

const styles = StyleSheet.create({
    direction: {
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: '2%',
        zIndex: 10
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 8,
        backgroundColor: 'white',
        paddingVertical: '5%',
        paddingHorizontal: '5%'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#777',
        paddingHorizontal: '5%'
    },
    insider: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 12,
        alignItems: 'center',
        width: '100%'
    },
    iconContainer: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: "#E9FAEF",
    },
    addressText: {
        fontWeight: 500,
        fontSize: 15,
        color: "#AAA"
    }
})