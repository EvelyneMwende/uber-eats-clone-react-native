import { View, Text, Image } from 'react-native'
import React from 'react'

const image = 
'https://images.happycow.net/venues/1024/19/97/hcmp199702_871899.jpeg'

const title = 'Farmhouse Kitchen Thai Cuisine'
const description = 'Thai · Comfort Food · $$ · 🎫  · 4 🌟 (2913 +)'
export default function About() {
  return (
    <View>
      {/* Restaurant Image */}
        <RestaurantImage image={image}/>

      {/* Restaurant title */}
      <RestaurantTitle title={title}/>

      {/* Restaurant Description */}
      <RestaurantDescription description={description}/>
    </View>
  )
}


const RestaurantImage =(props) => (
    <Image source={{uri: props.image}} style={{
        width: '100%',
        height: 180,
    }}/>
)


const RestaurantTitle = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.title}</Text>
)


const RestaurantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15,
    }}>{props.description}</Text>
)