import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function Profile() {

    const data = [
        {
            "id": 1,
            "name": "About",
            "icon": <Ionicons name="ios-document-outline" size={24} color="#444" />
        },
        {
            "id": 2,
            "name": "Notifications",
            "icon": <Ionicons name="notifications-outline" size={24} color="#444" />
        },
        {
            "id": 3,
            "name": "Contact",
            "icon": <AntDesign name="phone" size={24} color="#444" />
        },
        {
            "id": 4,
            "name": "Settings",
            "icon": <Ionicons name="ios-settings-outline" size={24} color="#444" />
        },
        {
            "id": 5,
            "name": "Logout",
            "icon": <MaterialIcons name="logout" size={24} color="#444" />
        }
    ]

    return (
        <View style={styles.container}>
            <Header route={"My Profile"} cancelRoute />
            <ImageBackground style={styles.bgContainer}>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomInsider}>
                        <View style={styles.stickyProfile}>
                            <TouchableOpacity style={styles.profileBtnn}>
                                <FontAwesome name="user" size={72} color="#F9F9F9" />
                            </TouchableOpacity>
                            <Text style={styles.profileName}>
                                Mehmet Türkan
                            </Text>
                            <Text style={styles.profileMail}>
                                mhturknn@gmail.com
                            </Text>
                        </View>
                        <View style={styles.columnContainer}>
                            <ScrollView contentContainerStyle={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 8
                            }}>
                                {data && data.map((item) => {
                                    return (
                                        <TouchableOpacity key={item.id} style={styles.btnContainer}>
                                            <View style={styles.btnRowContainer}>
                                                {item.icon}
                                                <Text style={styles.btnText}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    bgContainer: {
        backgroundColor: '#04AC66',
        width: '100%',
        height: '100%',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    topInsider: {
    },
    bottomInsider: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#F5F5F5',
        height: '100%',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    columnContainer: {
        width: '100%',
        height: '50%',
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: '#444',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.09,
        shadowRadius: 10,
    },
    btnRowContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 24,
    },
    btnText: {
        fontWeight: 700,
        fontSize: 16,
        color: '#444'
    },
    stickyProfile: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        width: '80%',
        height: '35%',
        position: 'absolute',
        top: -96,
        left: '10%',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    profileBtnn: {
        width: 100,
        height: 100,
        borderRadius: 500,
        backgroundColor: '#04AC66',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    profileName: {
        fontWeight: 700,
        fontSize: 24,
        color: '#444',
        marginTop: 8,
    },
    profileMail: {
        fontWeight: 600,
        fontSize: 18,
        color: 'gray',
        marginTop: -8
    }
})