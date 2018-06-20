import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import { createBottomTabNavigator } from 'react-navigation'
import { BasicExample } from './screens/basic'
import { CustomExample } from './screens/custom'
import { InteractiveExample } from './screens/interactive'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.statusBar} />
        <MainNav />
      </View>
    )
  }
}

const MainNav = createBottomTabNavigator(
  {
    Basic: { screen: BasicExample },
    Custom: { screen: CustomExample },
    Interactive: { screen: InteractiveExample }
  },
  {
    tabBarOptions: {
      style: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      labelStyle: {
        fontSize: 14
      },
      showIcon: false
    }
  }
)

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#000000',
    height: Constants.statusBarHeight
  }
})
