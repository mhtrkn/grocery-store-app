import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Help = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Help</Text>
        </SafeAreaView>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})