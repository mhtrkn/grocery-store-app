import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { deleteFavorites, isItemFavorite } from '../utils'
import { FavoriteIcon, FavoriteRedIcon } from '../../assets/icons'
import { useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react'
import DetailModal from './DetailModal'

const FavoriteCardItem = ({ data }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(true)
    }
    return (
        <TouchableOpacity onPress={handleClose} style={styles.container}>
            <DetailModal data={data} visible={open} onPress={() => setOpen(!open)} />
            {data && data?.discount &&
                <View style={styles.discountStyle}>
                    <Text style={styles.discountText}>{data.discount}</Text>
                </View>
            }

            <View style={styles.favoriteBtn}>
                <TouchableOpacity onPress={() => dispatch(deleteFavorites(data))}>
                    {
                        isItemFavorite(data) ?
                            <FavoriteRedIcon width={20} height={20} />
                            :
                            <FavoriteIcon width={20} height={20} strokeWidth={1.8} />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.addBtnContainer}>
                <TouchableOpacity>
                    <Entypo name="plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.itemCardTop}>
                <Image source={data.photo} style={styles.itemCarTopImage} />
            </View>
            <View style={styles.itemCardBot}>
                <View style={styles.itemCardBotInsider}>
                    <Text style={styles.itemTypeText}>{data.title}</Text>
                    <Text style={styles.priceText}>{data.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FavoriteCardItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '46%',
        height: 208,
        borderRadius: 10,
        shadowColor: '#777',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .1,
        elevation: 5,
    },
    discountStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#04AC66',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    discountText: {
        fontSize: 15,
        fontWeight: 600,
        color: 'white'
    },
    favoriteBtn: {
        position: 'absolute',
        right: 2,
        top: 2,
        paddingVertical: 3,
        paddingHorizontal: 4,
        zIndex: 1,
    },
    addBtnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 12,
        backgroundColor: '#04AC66',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        zIndex: 1
    },
    itemCardTop: {
        width: '100%',
        height: '70%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    itemCardBot: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    itemCarTopImage: {
        width: '90%',
        height: '90%',
        resizeMode: 'cover'
    },
    itemCardBotInsider: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 2,
        width: '100%',
        paddingHorizontal: 8,
    },
    itemTypeText: {
        fontSize: 16,
        fontWeight: 700,
        color: '#444'
    },
    priceText: {
        color: '#04AC66',
        fontWeight: 700
    },
})