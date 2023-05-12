import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { allCategories } from '../../constants'


const Categories = () => {
    return (
        <View style={styles.container}>
            <Header route={"Categories"} />
            <View style={styles.categoriesContainer}>
                {allCategories && allCategories.map((item) => {
                    return (
                        <View key={item.id} style={styles.categoriesBox}>
                            <View style={styles.categoriesInsider}>
                                <View style={styles.ShowRoom}>
                                    <Image source={item.photo} style={styles.ShowRoomImage} />
                                </View>
                                <Text style={styles.showRoomTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    categoriesInsider: {
        height: 115,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        columnGap: 6,
        rowGap: 16,
        paddingVertical: 32,
    },
    ShowRoomImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    ShowRoom: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: '#E7F6EF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#EFEFEF'
    },
    showRoomTitle: {
        fontSize: 15,
        fontWeight: 600,
        color: '#333'
    }
})