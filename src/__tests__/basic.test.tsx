import { shallow } from 'enzyme'
import * as React from 'react'
import { CustomPicker, CustomPickerProps } from '../'

describe('CustomPicker Basic Tests', () => {
  it('should render correctly with initial props', () => {
    const wrapper = shallow<CustomPickerProps>(
      <CustomPicker options={['1', '2', '3']} />
    )
    expect(wrapper).toMatchSnapshot()

    const customPicker = wrapper.instance()
    expect(customPicker.props.defaultValue).toEqual(undefined)
    expect(customPicker.props.value).toEqual(undefined)
    expect(customPicker.props.placeholder).toEqual('Pick an item...')
    expect(customPicker.props.modalAnimationType).toEqual('none')
    expect(customPicker.props.headerTemplate).toEqual(undefined)
    expect(customPicker.props.footerTemplate).toEqual(undefined)
    expect(customPicker.props.onValueChange).toEqual(undefined)
    expect(customPicker.props.onFocus).toEqual(undefined)
    expect(customPicker.props.onBlur).toEqual(undefined)
  })

  it('should able to select item', () => {
    let selectedValue = null
    const wrapper = shallow<CustomPickerProps>(
      <CustomPicker
        options={['1', '2', '3']}
        onValueChange={value => {
          selectedValue = value
        }}
      />
    )

    const customPicker = wrapper.instance() as CustomPicker
    customPicker.selectOption('3', true)
    expect(selectedValue).toEqual('3')
  })

  it('should able to set default value', () => {
    const wrapper = shallow<CustomPickerProps>(
      <CustomPicker options={['1', '2', '3']} defaultValue={'1'} />
    )
    const customPicker = wrapper.instance()
    expect(customPicker.props.defaultValue).toEqual('1')
  })

  it('should able to set initial value and default value', () => {
    let selectedValue = null
    const wrapper = shallow<CustomPickerProps>(
      <CustomPicker
        options={['1', '2', '3']}
        value={'1'}
        defaultValue={'3'}
        onValueChange={value => {
          selectedValue = value
        }}
      />
    )
    const customPicker = wrapper.instance() as CustomPicker

    expect(customPicker.props.defaultValue).toEqual('3')
    expect(customPicker.props.value).toEqual('1')

    customPicker.selectOption('2', true)
    expect(selectedValue).toEqual('2')

    customPicker.clear()
    expect(selectedValue).toEqual('3')
  })
})
