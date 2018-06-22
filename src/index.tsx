// tslint:disable:no-any
import * as React from 'react'
import {
  Dimensions,
  Modal,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import defaultFieldTemplate from './defaultFieldTemplate'
import defaultOptionTemplate from './defaultOptionTemplate'
import {
  CustomPickerActions,
  CustomPickerProps,
  CustomPickerState
} from './types'

const DEFAULT_TEXT = 'Pick an item...'

/**
 * React native customizable picker component
 */
export class CustomPicker extends React.PureComponent<
  CustomPickerProps,
  CustomPickerState
> {
  constructor(props: CustomPickerProps) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedItem: null
    }
    this.showOptions = this.showOptions.bind(this)
    this.hideOptions = this.hideOptions.bind(this)
    this.selectOption = this.selectOption.bind(this)
    this.clear = this.clear.bind(this)
    this.getLabel = this.getLabel.bind(this)
  }

  render() {
    const fieldTemplate = this.props.fieldTemplate || defaultFieldTemplate
    const optionTemplate = this.props.optionTemplate || defaultOptionTemplate

    const {
      modalAnimationType,
      placeholder,
      options,
      headerTemplate,
      footerTemplate,
      style,
      fieldTemplateProps,
      optionTemplateProps,
      backdropStyle,
      modalStyle
    } = this.props

    const actions: CustomPickerActions = {
      getLabel: this.props.getLabel || this.getLabel,
      clear: this.clear,
      open: this.showOptions,
      close: this.hideOptions
    }

    const maxHeight =
      this.props.maxHeight || Dimensions.get('window').height - 60

    return (
      <View>
        <TouchableOpacity onPress={this.showOptions}>
          <View style={style}>
            {fieldTemplate({
              defaultText: placeholder || DEFAULT_TEXT,
              selectedItem: this.state.selectedItem,
              ...actions,
              ...fieldTemplateProps
            })}
          </View>
        </TouchableOpacity>
        <Modal
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.hideOptions}
          animationType={modalAnimationType}
        >
          <TouchableWithoutFeedback onPress={this.hideOptions}>
            <View
              style={[
                { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
                backdropStyle
              ]}
            >
              <View
                style={[
                  { flex: 1, justifyContent: 'center', paddingHorizontal: 20 }
                ]}
              >
                <View
                  style={[{ backgroundColor: 'white', maxHeight }, modalStyle]}
                >
                  {headerTemplate && headerTemplate(actions)}
                  <ScrollView>
                    {options.map((o, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          this.selectOption(o)
                        }}
                        key={index}
                      >
                        {optionTemplate({
                          item: o,
                          getLabel: this.props.getLabel || this.getLabel,
                          ...actions,
                          ...optionTemplateProps
                        })}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                  {footerTemplate && footerTemplate(actions)}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    )
  }

  componentDidMount() {
    const { value, defaultValue } = this.props
    if (value || defaultValue) {
      this.selectOption(value || defaultValue)
    }
  }

  componentWillReceiveProps(nextProps: CustomPickerProps) {
    if (nextProps.value !== this.props.value) {
      this.selectOption(nextProps.value)
    }
  }

  /**
   * Default getLabel function. A get label from item function.
   * @param item Item value to translate.
   */
  getLabel(item: any) {
    return item ? item.toString() : null
  }

  /**
   * Show modal picker to display options.
   */
  showOptions() {
    if (this.state.modalVisible) {
      return
    }
    this.setState({ modalVisible: true }, this.props.onFocus)
  }

  /**
   * Hide options by hiding modal picker.
   */
  hideOptions() {
    if (!this.state.modalVisible) {
      return
    }
    this.setState({ modalVisible: false }, this.props.onBlur)
  }

  /**
   * Select an option.
   * @param selectedItem Item/option to select.
   */
  selectOption(selectedItem: any) {
    const { onValueChange } = this.props
    this.setState({ selectedItem }, () => {
      this.hideOptions()
      if (onValueChange) {
        onValueChange(selectedItem)
      }
    })
  }

  /**
   * Clear selected value.
   */
  clear() {
    const { defaultValue } = this.props
    this.selectOption(defaultValue || null)
  }
}

// Re-export all types for convenience use.
export {
  CustomPickerActions,
  CustomPickerProps,
  CustomPickerState,
  FieldTemplateFunction,
  FieldTemplateSettings,
  OptionTemplateFunction,
  OptionTemplateSettings,
  HeaderTemplateFunction,
  FooterTemplateFunction,
  FieldTemplateProps,
  OptionTemplateProps
} from './types'
