import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const styles = (theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            alignItems: 'stretch',
            justifyContent: 'center'
        },
        titleArea: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingTop: Constants.statusBarHeight,
            marginBottom: 16
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.title
        },
        list: {
            flex: 1,
            width: '100%'
        },
        lastSeen: {
            marginBottom: 16,
            paddingVertical: 16,
            backgroundColor: theme.lastSeen
        },
        titleLastSeen: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.title,
            marginHorizontal: 16,
            marginBottom: 8
        },
        carArea: {
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        carIcon: {
            fontSize: 30,
            fontWeight: 'bold',
            color: theme.title
        },
        canQuanityArea: {
            backgroundColor: 'red',
            borderRadius: 10,
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        carQuantity: {
            fontSize: 12,
            fontWeight: 'bold',
            color: "#fff"
        },
        iconArea: {
            marginLeft: 16
        },
        icon: {
            color: theme.text,
            fontSize: 30
        },
        btn: {
            margin: 16,
            marginBottom: 32,
            paddingVertical: 16,
            borderRadius: 10,
            backgroundColor: theme.btn
        },
        btnText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.black,
            textAlign: 'center'
        }
    })
}