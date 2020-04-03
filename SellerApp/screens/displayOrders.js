import React, { useState, useEffect }  from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ImageBackground, 
        Modal, TouchableHighlight, RefreshControl, 
        TouchableWithoutFeedback, Keyboard } from 'react-native';
import { WingBlank, WhiteSpace, Button } from '@ant-design/react-native';
import { Card } from 'react-native-paper';
import {AsyncStorage} from 'react-native';
import styles from '../styles/productStyles';
import { MaterialIcons } from '@expo/vector-icons';

export default function DisplayOrders( { navigation } ) {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  //const [tableNrExists, setTableNrExists] = useState("Shopping");
  //const [price, setPrice] = useState(0);
  //var id = 0;

  const getOrders = async ()=>{
    setRefreshing(true);
    id=0;
    const listOfOrders = JSON.parse(await AsyncStorage.getItem('orders'));
    console.log(listOfOrders);
    setOrders(listOfOrders);
  }

  useEffect(() => {
    getOrders();
  }, []);
  const setText = (num) => {
    if(num != null)
      return ("Table: " + num);
    else return "Shopping"
  }
  const setPrice = (singleOrder) => {
    var ammount = 0;
    {singleOrder.products.map((singleProduct) =>{
      ammount += singleProduct.times*singleProduct.price
    });}  
    return ammount;
  }

  return (

      <ImageBackground source={require('../images/background2.png')} 
        style={styles.container}>
        <ScrollView>
          {orders.map((item) => { 
            return (
              <TouchableOpacity key = {new Date().getTime()}
              onPress={ () => {
                navigation.navigate('OrderContent', { data: {item} });
              }}>
                <WingBlank size="lg">
                  <Card.Title            
                    title={setText(item.tableNr)}
                    left={(props) => {
                      return <Image {...props} 
                        style={[{width: 35, height: 35}, !item.Served ? {opacity: 0.2} : '1']}
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/categories-5/28/34_serve_tray_service_hot_dinner_restaurant_hotel-512.png',}}/> 
                    }}
                    right={(props) => (    
                        <View {...props} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                          <Button style={{borderColor: "white", right: 80}}>
                             <MaterialIcons name='shopping-cart' size={30} style={styles.shopping} />
                          </Button>                     
                          <Text style={{position: 'absolute', right: 0}}>{setPrice(item) + " KM"}</Text>
                      </View> 
                    )}
                    style={styles.card}
                  />
                </WingBlank>
                <WhiteSpace size="lg" />
                </TouchableOpacity>
            )
          }
          )}
        </ScrollView>
      </ImageBackground>   
  )             
}