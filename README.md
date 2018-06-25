# React Native Custom Picker

[![npm version](https://badge.fury.io/js/react-native-custom-picker.svg)](https://badge.fury.io/js/react-native-custom-picker)
[![build status](https://travis-ci.org/budiadiono/react-native-custom-picker.svg)](https://travis-ci.org/budiadiono/react-native-custom-picker)

React native customizable picker component.

## Installation

Using npm:

```
npm i -S react-native-custom-picker
```

or yarn:

```
yarn add react-native-custom-picker
```

## Props

| Prop Name           | Data Type | Default Values  | Description                                       |
|---------------------|-----------|-----------------|---------------------------------------------------|
| **options**         | any[]     | undefined       | Option list.                                      |
| value               | any       | undefined       | Current selected item.                            |
| defaultValue        | any       | undefined       | Default value. When clear button pressed this value become selected item.|
| placeholder         | string    | 'Pick an item'  | Placeholder, as default text to display when no option is selected. |
| modalAnimationType  | 'none', 'slide' or 'fade' | 'none' | Modal animation type. |
| headerTemplate      | HeaderTemplateFunction | undefined | Assign function to render header. |
| footerTemplate      | FooterTemplateFunction | undefined | Assign function to render footer. |
| fieldTemplate       | FieldTemplateFunction | Basic/default field view | Assign function to render field view. |
| fieldTemplateProps  | [FieldTemplateProps](#fieldtemplateprops)     | undefined | Props for field template |
| optionTemplate      | OptionTemplateFunction | Basic/default option view | Assign function to render option. |
| optionTemplateProps | [OptionTemplateProps](#optiontemplateprops)     | undefined | Props for option template |
| getLabel      | (selectedItem: any) => string | Returns `selectedItem.toString()`  | Assign function to return the selected option text to be displayed in field. |
| style               | ViewStyle | default         | Style of field container.                         |
| backdropStyle       | ViewStyle | default         | Style of modal backdrop.                          |
| modalStyle          | ViewStyle | default         | Dropdown modal style.                             |
| maxHeight           | ViewStyle | default         | Maximum height of modal.                          |
| onValueChange       | ViewStyle | undefined       | Event fired when value has been changed.          |
| onFocus             | ViewStyle | undefined       | Event fired when modal is opened.                 |
| onBlur              | ViewStyle | undefined       | Event fired when modal is closed.                 |

### FieldTemplateProps

| Prop Name           | Data Type | Default Values  | Description                                       |
|---------------------|-----------|-----------------|---------------------------------------------------|
| textStyle           | TextStyle | undefined       | Style of field text.                              |
| containerStyle      | ViewStyle | undefined       | Style of field container.                         |
| clearImage          | JSX.Element | cross icon    | Image element for clear button.                   |

### OptionTemplateProps

| Prop Name           | Data Type | Default Values  | Description                                       |
|---------------------|-----------|-----------------|---------------------------------------------------|
| textStyle           | TextStyle | undefined       | Style of option text.                             |
| containerStyle      | ViewStyle | undefined       | Style of option container.                        |


## Example

### Basic Example (No Custom)

You can use `CustomPicker` component directly as shown below:

![Basic Example Demo](https://rawgit.com/budiadiono/react-native-custom-picker/master/doc/images/basic-example.gif "Basic Example Demo")

```javascript
import * as React from 'react'
import { Alert, View } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export class BasicExample extends React.Component {
  render() {
    const options = ['One', 'Two', 'Three', 'Four', 'Five']
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
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
```

### Advanced Example (Customized)

Or customize it your self like this:

![Advanced Example Demo](https://rawgit.com/budiadiono/react-native-custom-picker/master/doc/images/advanced-example.gif "Advanced Example Demo")

```javascript
import * as React from 'react'
import { Alert, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { CustomPicker } from 'react-native-custom-picker'

export class CustomExample extends React.Component {
  render() {
    const options = [
      {
        color: '#2660A4',
        label: 'One',
        value: 1
      },
      {
        color: '#FF6B35',
        label: 'Two',
        value: 2
      },
      {
        color: '#FFBC42',
        label: 'Three',
        value: 3
      },
      {
        color: '#AD343E',
        label: 'Four',
        value: 4
      },
      {
        color: '#051C2B',
        label: 'Five',
        value: 5
      }
    ]
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
          placeholder={'Please select your favorite item...'}
          options={options}
          getLabel={item => item.label}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          footerTemplate={this.renderFooter}
          onValueChange={value => {
            Alert.alert('Selected Item', value ? JSON.stringify(value) : 'No item were selected!')
          }}
        />
      </View>
    )
  }
  
  renderHeader() {
    return (
      <View style={styles.headerFooterContainer}>
        <Text>This is header</Text>
      </View>
    )
  }

  renderFooter(action) {
    return (
      <TouchableOpacity
        style={styles.headerFooterContainer}
        onPress={() => {
          Alert.alert('Footer', "You've click the footer!", [
            {
              text: 'OK'
            },
            {
              text: 'Close Dropdown',
              onPress: action.close.bind(this)
            }
          ])
        }}
      >
        <Text>This is footer, click me!</Text>
      </TouchableOpacity>
    )
  }

  renderField(settings) {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.container}>
        <View>
          {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <TouchableOpacity style={styles.clearButton} onPress={clear}>
                <Text style={{ color: '#fff' }}>Clear</Text>
              </TouchableOpacity>
              <Text style={[styles.text, { color: selectedItem.color }]}>
                {getLabel(selectedItem)}
              </Text>
            </View>
          )}
        </View>
      </View>
    )
  }

  renderOption(settings) {
    const { item, getLabel } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, { backgroundColor: item.color }]} />
          <Text style={{ color: item.color, alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10
  }
})
```

## Example Projects

[Built with Typescript](https://github.com/budiadiono/react-native-custom-picker-example-ts)

[Built with Javascript](https://github.com/budiadiono/react-native-custom-picker-example)


## License

MIT
