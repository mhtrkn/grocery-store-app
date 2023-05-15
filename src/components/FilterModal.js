import { StyleSheet, Modal, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { allCategories } from '../constants';


const FilterModal = ({ visible, onPress }) => {
    const [active, setActive] = useState(0)
    const handleActive = (id) => {
        setActive(id)
    }
    return (
        <Modal visible={visible} style={styles.container} transparent animationType='slide'>
            <View style={styles.container}>
                <View style={styles.insider}>
                    <View style={styles.insiderTop}>
                        <View>
                            <Text style={styles.filtersText}>
                                Filters
                            </Text>
                        </View>
                        <View style={styles.filterCloseView}>
                            <TouchableOpacity style={styles.topBtn} onPress={onPress}>
                                <Ionicons name="close" size={24} color="#04AC66" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={styles.insiderContent} contentContainerStyle={styles.insiderContentScroll}>
                        <View style={styles.scrollContent}>
                            <Text style={styles.filterHeaderText}>
                                Distance
                            </Text>
                            <Slider
                                style={{ width: '100%', height: 40 }}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#04AC66"
                                maximumTrackTintColor="gray"
                            />
                        </View>
                        <View style={styles.scrollContent}>
                            <Text style={styles.filterHeaderText}>
                                Categories
                            </Text>
                            <ScrollView horizontal contentContainerStyle={{ justifyContent: 'flex-start', gap: 8, alignItems: 'center', paddingVertical: 8, paddingTop: 16 }}>
                                {allCategories.map((item) => {
                                    return (
                                        <TouchableOpacity onPress={() => handleActive(item.id)} style={[styles.filterCategory, { backgroundColor: active === item.id && '#04AC66', color: active === item.id && 'white' }]} key={item.id}>
                                            <Text style={styles.filterCategoryText}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.bottomInsider}>
                        <TouchableOpacity style={styles.filterResTouchable}>
                            <Text style={styles.filterResBtn}>
                                Reset
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterTouchable}>
                            <Text style={styles.filterApplyBtn}>
                                Apply
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default FilterModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .35)',
    },
    insider: {
        flex: .8,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center'
    },
    insiderTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4%',
        alignItems: 'center',
        width: '85%',
        position: 'relative',
    },
    filterCloseView: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    topBtn: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    topBtnText: {
        fontSize: 18,
        fontWeight: 500,
        color: '#04AC66'
    },
    filtersText: {
        fontSize: 24,
        fontWeight: 600,
        color: '#444'
    },
    bottomInsider: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: '14%',
        width: '100%',
        paddingVertical: '4%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        shadowColor: '#444',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        backgroundColor: 'white',
    },
    filterTouchable: {
        backgroundColor: '#04AC66',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#04AC66',
        minWidth: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    filterCategory: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#04AC66',
        zIndex: 1
    },
    filterCategoryText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#444'
    },
    filterResTouchable: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#04AC66',
        minWidth: '40%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    filterApplyBtn: {
        fontSize: 18,
        fontWeight: 600,
        color: 'white'
    },
    filterResBtn: {
        fontSize: 18,
        fontWeight: 600,
        color: '#04AC66'
    },
    insiderContent: {
        width: '85%',
    },
    insiderContentScroll: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 36,
        marginTop: '5%'
    },
    filterHeaderText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#444'
    },
    scrollContent: {
        gap: 4,
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: '4%'
    }
})