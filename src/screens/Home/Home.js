import React from 'react'
import { CategoriesShowRoom, Deals, Header, SearchBar, PopularItemShowRoom } from "../../components"
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import CartModal from '../../components/CartModal';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function Home() {

    const visible = useSelector(state => state.cartModalVisible)

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <SearchBar />
                <CartModal visible={visible} />
                <CategoriesShowRoom />
                <Deals />
                <PopularItemShowRoom />
                <Deals />
            </ScrollView>
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