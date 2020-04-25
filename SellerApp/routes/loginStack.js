import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';
import Login from '../screens/login';
import Start from '../screens/start';
import Header from '../components/headerLogin';
import React from 'react';
import GuestMenu from '../screens/guestMenu';
import FilterIngredients from '../screens/filterIngredients';

const screens = {
    Start: {
        screen: Start,
        navigationOptions: ({ navigation }) => {
            return {
                title: '',
                headerStyle: {height: 0,},
            }
        }
    },
    LogIn: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft:()=> null,
                headerTitle: () => <Header navigation={navigation} title='Log In' />
            }
        }
    },
    Offer: {
        screen: GuestMenu,
        navigationOptions: ({ navigation }) => {
            return {
                title: '',
                headerStyle: {height: 0,},
                headerLeft: () => <View></View>
            }
        }
    },
    Filter: {
        screen: FilterIngredients,
        navigationOptions: ({ navigation }) => {
            return {
                title: '',
               headerStyle: {backgroundColor: 'white'},
                headerBackTitle: 'Back',
            }
        }
    }
};

const LoginStack = createStackNavigator (screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#05132e', height: 80, },
   }
});

export default createAppContainer(LoginStack);