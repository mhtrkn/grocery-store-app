import React from 'react'
import { CategoriesShowRoom, Deals, Header, SearchBar, PopularItemShowRoom } from "../../components"
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import CartModal from '../../components/CartModal';

const Tab = createMaterialTopTabNavigator();

export default function Home() {

    const visible = useSelector(state => state.cartModalVisible)
    console.log('Visible: ',visible)

    return (
        <View style={styles.container}>
            <Header />
            <CartModal visible={visible} />
            <SearchBar />
            <CategoriesShowRoom />
            <Deals />
            <PopularItemShowRoom />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    }
})