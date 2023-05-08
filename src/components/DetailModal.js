import { Image, Modal, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import { AntDesign } from '@expo/vector-icons'
import BottomContainer from './BottomContainer'

const DetailModal = ({ data, visible, onPress }) => {
    const [addText, setAddText] = useState("Add to Cart")
    const [count, setCount] = useState(1)
    const [added, setAdded] = useState(false);
    const handleAdded = () => {
        setAddText(
            <ActivityIndicator size="small" color="white" />
        )
        setTimeout(() => {
            setAdded(true)
        }, 1000)
    }
    const handleAddCount = type => {
        if (type === "plus") {
            const tmp = count
            setCount(
                <ActivityIndicator size="small" color="white" />
            )
            setTimeout(() => {
                setCount(tmp + 1)
            }, 750)
        } else {
            if (count <= 1) {
                setAddText("Add to Cart")
                setAdded(false)
            } else {
                setCount(count - 1)
            }
        }
    }

    return (
        <Modal visible={visible} style={styles.container} animationType="slide" >
            <View style={styles.container}>
                <Header route={"Item Detail"} Modal={true} ModalClose={onPress} />
                <ScrollView style={styles.scrollContainer} contentContainerStyle={{
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <View style={styles.imageContainer}>
                        {data.discount &&
                            <View style={styles.discountContainer}>
                                <Text style={styles.discountStyle}>
                                    {data.discount}
                                </Text>
                            </View>
                        }
                        <Image source={data.photo} style={styles.image} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentColumn}>
                            <Text style={styles.priceStyle}>
                                {data.price}
                            </Text>
                            <Text style={styles.itemTitle}>
                                {data.title}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text>
                            Hako
                        </Text>
                    </View>
                </ScrollView>
                <BottomContainer>
                    {!added ?
                        (<TouchableOpacity onPress={handleAdded} style={styles.addBtn}>
                            <Text style={styles.addText}>
                                {addText}
                            </Text>
                        </TouchableOpacity>)
                        :
                        <View style={styles.addBtnRow}>
                            <TouchableOpacity activeOpacity={.8} style={styles.calculateLeftBtn} onPress={() => handleAddCount("minus")}>
                                <AntDesign name="minus" size={24} color="#04AC66" />
                            </TouchableOpacity>
                            <Text style={styles.counterStyle}>
                                {count}
                            </Text>
                            <TouchableOpacity activeOpacity={.8} style={styles.calculateRightBtn} onPress={() => handleAddCount("plus")}>
                                <AntDesign name="plus" size={24} color="#04AC66" />
                            </TouchableOpacity>

                        </View>
                    }
                </BottomContainer>
            </View>
        </Modal>
    )
}

export default DetailModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    scrollContainer: {
        width: '100%',
        backgroundColor: 'red',
        paddingVertical: '5%',
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '80%',
        resizeMode: 'contain'
    },
    discountContainer: {
        position: 'absolute',
        left: '15%',
        top: '15%',
        backgroundColor: '#04AC66',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
        zIndex: 10
    },
    discountStyle: {
        fontSize: 24,
        fontWeight: 800,
        color: 'white'
    },
    contentContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        gap: 4,
    },
    priceStyle: {
        fontSize: 28,
        fontWeight: 700,
        color: '#04AC66'
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: '#444'
    },
    addBtnContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '13%',
        paddingVertical: '5%',
        backgroundColor: 'white',
        shadowColor: '#444',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    addBtn: {
        maxWidth: '90%',
        minWidth: '90%',
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#04AC66',
    },
    addBtnRow: {
        flexDirection: 'row',
        backgroundColor: '#04AC66',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '45%',
        height: '75%',
        borderRadius: 10,
        shadowColor: '#04AC66',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .25,
        shadowRadius: 10,

    },
    calculateLeftBtn: {
        width: '33%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    calculateRightBtn: {
        width: '33%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    addText: {
        fontSize: 20,
        fontWeight: 700,
        color: 'white'
    },
    counterStyle: {
        fontSize: 24,
        fontWeight: 700,
        color: 'white'
    }
})