import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
      }}>

      {/* displays  content from HeaderTabs in the COMPONENTS folder */}
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs />
        <SearchBar/>
      </View>
    </SafeAreaView>
  )
}
