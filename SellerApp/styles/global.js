import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',      
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'space-between'
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 0,
        color: 'white'
    },
    
})
