import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components'

export default function Payment() {
    const [creditCardModal, setCreditCardModal] = useState(false)
    const handleOpen = () => {
        setCreditCardModal(!creditCardModal)
    }
    return (
        <View style={styles.container}>
            <Header cart={true} route={"Payment"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
})