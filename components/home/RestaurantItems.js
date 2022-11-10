import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants =[
    {
        name: "Beachside Bar",
        image_url:
         "https://pitchersnorthwest.com/wp-content/uploads/2021/05/eating-quarters-1.jpg",
        categories: ["Cafe", "Pubs"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },

    {
        name: "Benihana",
        image_url: 
        "https://www.shoutlo.com/uploads/articles/header-img-new-restaurants-in-chandigarh7.jpg",
        categories: ["Cafe", "Pubs"],
        price: "$$",
        reviews: 1200,
        rating: 4.7,
    },

    {
        name: "India's Grill",
        image_url: 
        "https://www.shoutlo.com/uploads/articles/header-img-new-restaurants-in-chandigarh7.jpg",
        categories: ["Indian", "Pubs"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    }
]


export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30, }}>
    {/* props.restaurantData is coming from Home.js */}
    {props.restaurantData.map((restaurant,index) =>(
        <View key={index} style={{
        marginTop: 10,
        padding: 15,
        backgroundColor: 'white', }}>
        {/* pass in the props image to RestaurantImage */}
      <RestaurantImage image={restaurant.image_url}/>
      {/* pass in the props name and rating to RestaurantImage */}
      <RestaurantInfo 
      name={restaurant.name}
      rating={restaurant.rating}/>
    </View>

    ))}

    </TouchableOpacity>
    
  )
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 20,
        top: 20,
      }}
    >
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,}}>

    <View>
      <Text style={{fontSize: 15,fontWeight: 'bold',}}>
      {/* props passed into RestaurantInfo which is name */}
        {props.name}
      </Text>

      <Text style={{fontSize: 13, color: 'gray',}}>
        30-35·min
      </Text>
    </View>

    <View
      style={{
        backgroundColor: 'white',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
)
