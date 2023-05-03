import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.searchIcon}>
                    <AntDesign name="search1" size={24} color="#444" />
                </View>
                <TextInput style={styles.searchInput} placeholder='Search food, drink, etc' />
                <TouchableOpacity style={styles.filterIcon}>
                    <Ionicons name="md-options" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        paddingVertical: 24,
        paddingHorizontal: '7%',
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        position: 'relative',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,

    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        top: '50%',
        bottom: '50%',
        width: 40,
        height: 40
    },
    filterIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#04AC66'
    },
    searchInput: {
        paddingLeft: 50,
        fontSize: 16
    }
})