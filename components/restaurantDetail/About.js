import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image: 'https://images.happycow.net/venues/1024/19/97/hcmp199702_871899.jpeg',
  price: '$$',
  review_count: '1500',
  rating: '4.5',
  categories: [
    { title: 'Thai' },
    { title: 'Comfort food' },
    { title: 'Vegetarian' },
    { title: 'Vegan' },
    { title: 'Gluten Free' },
  ],
}

export default function About(props) {
  const { name, image, price,  review_count, rating, categories } = 
  props.route.params //getting data from  restaurantDetail

  const formattedCategories = categories.map((cat) => cat.title).join(' · ')

  const description = `${formattedCategories} ${
    price ? ' · ' + price : ''
  } · 🎫 · ${rating} 🌟 (${(review_count)}+)`

  return (
    <View>
      {/* Restaurant Image */}
      <RestaurantImage image={image} />

      {/* Restaurant title */}
      <RestaurantName name={name} />

      {/* Restaurant Description */}
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: '100%',
      height: 180,
    }}
  />
)

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15,
    }}
  >
    {props.description}
  </Text>
)
