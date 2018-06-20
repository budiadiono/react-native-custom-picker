import React from 'react'
import { Alert, View } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export class InteractiveExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Two'
    }
  }

  render() {
    const options = ['One', 'Two', 'Three', 'Four', 'Five']
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      >
        <CustomPicker
          options={options}
          onValueChange={value => {
            this.setState({ value })
          }}
        />

        <CustomPicker value={this.state.value} options={options} />
      </View>
    )
  }
}
