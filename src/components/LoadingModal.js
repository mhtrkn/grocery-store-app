import { StyleSheet, Modal, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import LottieView from "lottie-react-native"

const LoadingModal = ({ open, onPress }) => {
    return (
        <Modal visible={open} style={styles.container} transparent animationType="slide" >
            <View style={styles.container}>
                <View style={styles.insider}>
                    <LottieView
                        autoPlay
                        style={{
                            width: 160,
                            height: 160,
                            backgroundColor: '#eee',
                            borderRadius: 200
                        }}
                        source={require('../../assets/Bag.json')}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default LoadingModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .25)'
    },
    insider: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})