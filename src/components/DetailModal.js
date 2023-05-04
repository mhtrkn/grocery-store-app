import { Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DetailModal = ({ visible, onPress }) => {

    return (
        <Modal visible={visible} style={styles.container} animationType="slide" >
            <View style={styles.container}>
                <Header route={"Item Detail"} Modal={true} ModalClose={onPress} />
            </View>
        </Modal>
    )
}

export default DetailModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})