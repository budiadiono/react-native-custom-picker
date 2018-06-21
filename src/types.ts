import { TextStyle, ViewStyle } from 'react-native'

// tslint:disable:no-any

export interface CustomPickerActions<T = any> {
  /**
   * Clear field / remove selected item.
   */
  clear: () => void

  /**
   * Open modal.
   */
  open: () => void

  /**
   * Close modal.
   */
  close: () => void

  /**
   * Returns label of selected item.
   */
  getLabel: (selectedValue: T) => string
}

/**
 * Props for field template
 */
export interface FieldTemplateProps {
  /**
   * Style of field text.
   */
  textStyle?: TextStyle

  /**
   * Style of field container.
   */
  containerStyle?: ViewStyle

  /**
   * Image element for clear button.
   */
  clearImage?: JSX.Element
}

/**
 * Render field template settings.
 */
export interface FieldTemplateSettings<T = any>
  extends CustomPickerActions<T>,
    FieldTemplateProps {
  defaultText: string
  selectedItem: T
}

/**
 * Props for option template.
 */
export interface OptionTemplateProps {
  /**
   * Style of option text.
   */
  textStyle?: TextStyle

  /**
   * Style of option container.
   */
  containerStyle?: ViewStyle
}

/**
 * Render option template settings.
 */
export interface OptionTemplateSettings<T = any>
  extends CustomPickerActions<T>,
    OptionTemplateProps {
  item: any
}

/**
 * A function to render field view.
 */
export type FieldTemplateFunction<T = any> = (
  settings: FieldTemplateSettings<T>
) => JSX.Element

/**
 * A function to render option view.
 */
export type OptionTemplateFunction<T = any> = (
  settings: OptionTemplateSettings<T>
) => JSX.Element

/**
 * A function to render header.
 */
export type HeaderTemplateFunction<T = any> = (
  settings: CustomPickerActions<T>
) => JSX.Element

/**
 * A function to render footer.
 */
export type FooterTemplateFunction<T = any> = (
  settings: CustomPickerActions<T>
) => JSX.Element

/**
 * DropdownSelect component props type.
 */
export interface CustomPickerProps {
  /**
   * Placeholder, as default text to display when no option is selected.
   */
  placeholder?: string

  /**
   * Modal animation type.
   */
  modalAnimationType?: 'none' | 'slide' | 'fade'

  /**
   * Assign function to render header.
   */
  headerTemplate?: HeaderTemplateFunction

  /**
   * Assign function to render footer.
   */
  footerTemplate?: FooterTemplateFunction

  /**
   * Assign function to render field view.
   */
  fieldTemplate?: FieldTemplateFunction

  /**
   * Assign function to render each option view.
   */
  optionTemplate?: OptionTemplateFunction

  /**
   * Assign function to return the selected option text to be displayed in field.
   */
  getLabel?: (selectedValue: any) => string

  /**
   * Current selected item.
   */
  value?: any

  /**
   * Option list.
   */
  options: any[]

  /**
   * Props for option template.
   */
  optionTemplateProps?: OptionTemplateProps

  /**
   * Style of field container.
   */
  style?: ViewStyle

  /**
   * Props for field template.
   */
  fieldTemplateProps?: FieldTemplateProps

  /**
   * Style of modal backdrop.
   */
  backdropStyle?: ViewStyle

  /**
   * Dropdown modal style.
   */
  modalStyle?: ViewStyle

  /**
   * Maximum height of modal.
   */
  maxHeight?: number

  /**
   * Event fired when value has been changed.
   */
  onValueChange?: (value: any) => void

  /**
   * Event fired when modal is opened.
   */
  onFocus?: () => void

  /**
   * Event fired when modal is closed.
   */
  onBlur?: () => void
}

/**
 * DropdownSelect component state type.
 */
export interface CustomPickerState {
  /**
   * Modal visibility state.
   */
  modalVisible: boolean
  /**
   * Selected item.
   */
  selectedItem: any
}
