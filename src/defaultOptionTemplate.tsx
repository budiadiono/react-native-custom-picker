import * as React from 'react'
import { Text, View } from 'react-native'
import { OptionTemplateFunction } from './types'

const defaultOptionTemplate: OptionTemplateFunction = ({ item, getLabel }) => (
  <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10
    }}
  >
    <Text>{getLabel(item)}</Text>
  </View>
)

export default defaultOptionTemplate
