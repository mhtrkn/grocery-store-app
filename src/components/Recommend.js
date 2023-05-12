import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Recommend = () => {
    return (
        <View style={styles.container}>
            <Text>Recommend</Text>
        </View>
    )
}

export default Recommend

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})