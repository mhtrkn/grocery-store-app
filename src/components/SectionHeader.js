import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SectionHeader = ({ title, buttonName, onPress }) => {
    return (
        <View style={styles.topContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onPress} style={styles.seeAllContainer}>
                <Text style={styles.seeAll}>
                    {buttonName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SectionHeader

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 700
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    seeAllContainer: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 4
    },
    seeAll: {
        fontWeight: 600,
        fontSize: 14,
        color: '#04AC66'
    },
})