import { View, Text, ScrollView } from 'react-native'
import React, { useEffect , useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = 
"Akc_IzJ0KYYqW7dGXQufUtFh4EYGsAj4Ry9lJOcaOFEFgAcs9MrgNTtBfNdXTZUXZhrzm9oLIZx2xAfJPHQ9YlhSDgctFWP0R3gg31SiGejZYAB4nB9rvEiSuX9rY3Yx"

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp =() =>{
    // URL where we are GETTING/FETCHNG data from
    const yelpurl = 
    'https://api.yelp.com/v3/businesses/search?term=restaurant&location=LosAngeles'

    // Pass in YELP API credentials
  const apiOptions ={
    headers:{
      Authorization: `Bearer ${YELP_API_KEY}`,
    }
  }


  return fetch(yelpurl, apiOptions)
  .then((res) => res.json())
  .then((json) => setRestaurantData(json.businesses))

  }



  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
      }}
    >
      {/* displays  content from HeaderTabs in the COMPONENTS folder */}
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showVerticalScrollIndicator={false}>
        <Categories />
        {/* RestaurantItems takes in a props with the name RestaurantData */}
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  )
}
