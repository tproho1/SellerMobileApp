import { StyleSheet, Dimensions } from 'react-native';
import { getFonts } from '../functions/async';

getFonts();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
      flex: 1, 
      width: '100%',
      flexDirection: 'row', 
      alignContent: 'space-between',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    shoppingCart: { 
        borderColor: "white", 
        flexDirection: 'row',
    },
    shopping: {
        alignSelf: 'center',
        opacity: 0.5,
    },
    numberInput: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#696969',
      width: 60,
      height: 45,
      textAlign: 'center',
      opacity: 0.8,
      borderRadius: 10,
      paddingLeft: 7,
    },    
    finishBtn: {
        width: 100, 
        height: 50, 
        backgroundColor: 'grey',
        marginRight: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
      flex: 2,
      width: Dimensions.get('window').width,   
    },
    textContainer: {
      flex: 1,
      width: "90%",
      backgroundColor: 'white',
      marginBottom: 20,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },  
    headingText: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      borderBottomWidth: 1, 
      borderBottomColor: '#C0C0C0',
      backgroundColor: 'white',
    },
    text: {
      flex: 3,
      color: "#404040",  
      fontSize: 30, 
      padding: 10,
      textAlign: "left",
      fontFamily: 'courgette-regular',
    },
    price: {
      flex: 1,
      color: '#696969',
      padding: 10,
      fontWeight: "bold",
      textAlign: 'right',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
      fontFamily: 'courgette-regular',
    },
    smallerText: { 
      flex: 1,
      color: "#696969",   
      fontSize: 18, 
      padding: 10,
      textAlign: "left",
      fontFamily: 'courgette-regular',
    },
      card: {
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 0.2,
        borderColor: '#d9d9d9',
        borderRadius: 20,
        backgroundColor: 'white',
        paddingBottom: 5,
        marginTop: 10,
      },
      tableNum: {
        marginRight: 30,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fb5b5a',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#fb5b5a',
        opacity: 0.7
      },
      backBtn: {
        backgroundColor: "white",
        width: 180,
        height: 40,
        marginTop: 7,
        marginLeft: 15,
        justifyContent: "center",
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#333333",
      },
      orderBtn: {
        backgroundColor: "white",
        width: 180,
        height: 40,
        marginTop: 7,
        marginRight: 15,
        justifyContent: "center",
        borderRadius: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#333333",
      },
      btnText: {
        color: "#333333",  
      },
      shoppingCartGreen: {
        width: 60,
        height: 65,
        marginTop: 10,
        marginLeft: 20,
        color: "#98FB98",
        opacity: 0.75,
      },
      deleteIcon: {
        width: 60,
        height: 65,
        marginTop: 10,
        color: "#FA8072",
        opacity: 0.85,
      },
      headerForOrder: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        backgroundColor: "#333333", 
        //marginBottom: 10, 
        height: 55, 
      },
      footerForOrder: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginTop: 5, 
        height: 55, 
      },
      sumbitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        marginBottom: 10,
        backgroundColor: "grey",
        opacity: 0.7
      },
      sumbitText: {
        left: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        marginTop: 15,
        backgroundColor: "grey",
        padding: 2,
        opacity: 0.8,
      },
      tableNrInput: {
        backgroundColor: 'white',
        width: 60,
        height: 35,
        borderRadius: 10,
        right: 0,
        paddingLeft: 4,
      },
      viewOfInput: {
        flexDirection: 'row', 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: "grey",
        opacity: 0.8,
        padding: 3,
        marginBottom: 15,
      },
      sumbitText2: {
        left: 0,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        backgroundColor: "grey",
        paddingBottom: 10,
      },
});