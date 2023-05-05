import { StyleSheet, Modal, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'

const FilterModal = ({ visible, onPress }) => {
    return (
        <Modal visible={visible} style={styles.container} transparent animationType="slide" >
            <View style={styles.container}>
                <View style={styles.insider}>
                    
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .25)'
    },
    insider: {
        flex: .7,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    }
})