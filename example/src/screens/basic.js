import React from 'react'
import { Alert, View } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export class BasicExample extends React.Component {
  render() {
    const options = ['One', 'Two', 'Three', 'Four', 'Five']
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      >
        <CustomPicker
          options={options}
          onValueChange={value => {
            Alert.alert('Selected Item', value || 'No item were selected!')
          }}
        />
      </View>
    )
  }
}
