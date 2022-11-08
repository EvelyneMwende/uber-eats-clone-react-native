import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { SafeAreaView } from 'react-native-web'

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
      </View>
    </SafeAreaView>
  )
}
