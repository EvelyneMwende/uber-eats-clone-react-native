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
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp =() =>{
    // URL where we are GETTING/FETCHNG data from
    const yelpurl = 
    `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`

    // Pass in YELP API credentials
  const apiOptions ={
    headers:{
      Authorization: `Bearer ${YELP_API_KEY}`,
    }
  }


  return fetch(yelpurl, apiOptions)
  .then((res) => res.json())
  .then((json) => setRestaurantData(
    json.businesses.filter((business)=> 
    business.transactions.includes(activeTab.toLowerCase())))) //filter restaurants based on the state of the top bar DELIVERY or PICKUP

  }



  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]) //looks for a change in the city variable or a change in the active header tab
  //when it updates the function is ran again

  

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
      }}
    >
      {/* displays  content from HeaderTabs in the COMPONENTS folder */}
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler ={setCity}/>
      </View>

      <ScrollView showVerticalScrollIndicator={false}>
        <Categories />
        {/* RestaurantItems takes in a props with the name RestaurantData */}
        <RestaurantItems 
        restaurantData={restaurantData}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
