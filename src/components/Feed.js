import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feed = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Feed</Text>
        </SafeAreaView>
    )
}

export default Feed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})