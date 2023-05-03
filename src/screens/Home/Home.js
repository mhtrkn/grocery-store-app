import React from 'react'
import { CategoriesShowRoom, Header, SearchBar } from "../../components"
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <SearchBar />
            <CategoriesShowRoom />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FCFCFC'
    }
})