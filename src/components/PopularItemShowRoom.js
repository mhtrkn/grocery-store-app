import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SectionHeader from './SectionHeader';
import { popularItems } from '../constants';
import { FavoriteIcon, FavoriteRedIcon } from '../../assets/icons';
import { Entypo } from '@expo/vector-icons';
import DetailModal from './DetailModal';

const Seperator = () => (
    <View style={{ padding: 10 }} />
)

const ItemCard = ({ data, sendData, open, openDetail, onPress, like }) => {

    return (
        <>
            <DetailModal data={sendData} visible={open} onPress={openDetail} />
            <TouchableOpacity activeOpacity={.4} onPress={openDetail} style={styles.itemCardContainer}>
                {data.discount &&
                    <View style={styles.discountStyle}>
                        <Text style={styles.discountText}>{data.discount}</Text>
                    </View>
                }
                <View style={styles.favoriteBtn}>
                    <TouchableOpacity onPress={onPress}>
                        {
                            like ?
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
        </>
    )
}

const PopularItemShowRoom = () => {
    const navigation = useNavigation()
    const [active, setActive] = useState(0)
    const [isLiked, setLiked] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const handleRoute = () => { }
    const [sendData, setSendData] = useState([])
    const handleItemDetail = (event) => {
        setSendData(event)
        setOpen(!isOpen)

    }
    const handleLike = () => {
        setLiked(!isLiked)
    }

    return (
        <View style={styles.container}>
            <SectionHeader title={"Popular Item"} buttonName={"See All"} onPress={handleRoute} />
            <FlatList
                data={popularItems}
                renderItem={({ item }) => <ItemCard data={item} sendData={sendData} open={isOpen} openDetail={() => handleItemDetail(item)} onPress={handleLike} like={isLiked} />}
                keyExtractor={item => item.id}
                horizontal
                style={{ paddingVertical: 6 }}
                ItemSeparatorComponent={Seperator}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default PopularItemShowRoom

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '7%',
        paddingBottom: '2%'
    },
    ShowRoomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ShowRoomInsider: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ShowRoomImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        borderRadius: 10,
    },
    ShowRoom: {
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#E7F6EF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 4,
    },
    itemCardContainer: {
        width: 130,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#333",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.09,
        shadowRadius: 5.00,

        elevation: 1,
        position: 'relative',
    },
    discountStyle: {
        position: 'absolute',
        left: 0,
        paddingVertical: 3,
        paddingHorizontal: 4,
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
        bottom: 10,
        backgroundColor: '#04AC66',
        paddingVertical: 4,
        paddingHorizontal: 6,
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
        color: '#333'
    },
    priceText: {
        color: '#04AC66',
        fontWeight: 700
    }
})