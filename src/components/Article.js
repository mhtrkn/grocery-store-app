import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Article = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Article</Text>
        </SafeAreaView>
    )
}

export default Article

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})