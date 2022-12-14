import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function RestaurantDetail({route}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{
        marginVertical: 20,

      }}/>
      <ScrollView>
      <MenuItems/>

      </ScrollView>
      
    </View>
  )
}