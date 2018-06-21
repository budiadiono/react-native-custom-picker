import React from 'react'
import { Alert, Image, View } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export class StylingExample extends React.Component {
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
          style={{
            padding: 15,
            backgroundColor: '#252446',
            borderRadius: 8,
            alignSelf: 'center',
            width: 200
          }}
          fieldTemplateProps={{
            containerStyle: {
              borderBottomColor: '#92A4D5'
            },
            textStyle: {
              color: '#ffffff'
            },
            clearImage: (
              <Image
                style={{ width: 16, height: 16 }}
                source={{
                  uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAbxQTFRFAAAAnh0d+y4uAwEBFQQE/z09MAkJAQAAySUl/zIyEAMDdRYWlBsb6isr/z4+/2VljhoariAg/zQ0/9vbLQgIPgsLWhAQGwUFMwkJBwEBAAAAAgAAAwAAYxISpB4euiIiwiQkwyQkvCIiqB8fchUVkxsbwSMj0CYm0SYmxCQknR0dlRsbxyUlyyUloB0dXRERwiMjxiQkfxcXpx8f0SYm0yYmsSAgvCIiwiQkBQEBDwMDxCQkySUlZhMTHgUFxCQkySUlaxQUAAAAviMjxCQkMAkJriAg0iYmtiEhehYWyyUlkBoaox4ezSUlzyYmrCAgpB4eyCUl0yYm1CYmrB8fIQYGiBkZtCEhyiUlyiUlxiQktyIikRoaRAwMchUVdRUVTQ4O1Scn1SYm1iws1Skp1Sgo1y4u2Dc37qen54SE1SUl425u8LOz2kND1i0t7qio/////fT054OD429v++rq88DA1ioq6ImJ/fb2/fX1/PLy/vv77aGh1zAw6IiI/vj4//397aCg1y8v1icn43Bw/vz854WF1isr8ba26Y2N9c7O2To61CYm20ZG9MXF6IqK9tHR3ldX2Dg42Ts7zU3PRgAAAGF0Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBQYLRISmqItOESml8fa0NyrG1zwMp78YSfL7Y4qnBwitxxQJsMoWApWxClj5dBbUJULf61hGyv3+WQQebs3Pt3onChgZDB+VAhAAAAABYktHRHDYAGx0AAAACXBIWXMAAABIAAAASABGyWs+AAABAElEQVQY02NgAAMpaRkpBjhglJWTV1BUUlZhYgZxWVhV1dQTgUBDU4uBjYGBnUNbJyk5JSkxNS1JV4+Ti4Fb3yApPSMzNSs7JzfL0IiHgdfYJC+/oLCouKSgNN3UjI+BwTyxrLyioLKqoLqmNsnCksHKOjEppa6+oKChsSmp2caWwc4+MTGrpbCgoLo8NanZwZHByTkxFai/tbqgsK090cWVgdPNvamjoLqxs7Kgq7vHg59BwNMwqbevpim1f8LEJC9vQQYuIR/frEm1SUnJk5P8/IVFGBhEpQICg5KamxODdUNCxUCeEWcIC3eJiIyKjpGSgHqXnSE2Lj5BShLEBgAc6UXJk+KssgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yMFQwOTo1NjowMSswMjowMH1498kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjBUMDk6NTY6MDErMDI6MDAMJU91AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=='
                }}
              />
            )
          }}
          optionTemplateProps={{
            containerStyle: {
              backgroundColor: '#343434',
              height: 60
            },
            textStyle: {
              color: '#6CA6C1'
            }
          }}
        />
      </View>
    )
  }
}
