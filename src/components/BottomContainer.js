import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomContainer = ({ children }) => {
    return (
        <View style={styles.addBtnContainer}>
            {children}
        </View>
    )
}

export default BottomContainer

const styles = StyleSheet.create({
    addBtnContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '13%',
        paddingVertical: '5%',
        backgroundColor: 'white',
        shadowColor: '#444',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
})