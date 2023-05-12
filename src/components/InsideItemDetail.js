import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InsideItemDetail = () => {
    return (
        <View style={styles.container}>
            <Text>InsideItemDetail</Text>
        </View>
    )
}

export default InsideItemDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})