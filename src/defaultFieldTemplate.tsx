import * as React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FieldTemplateFunction } from './types'

const defaultFieldTemplate: FieldTemplateFunction = ({
  getLabel,
  defaultText,
  selectedItem,
  clear,
  containerStyle,
  textStyle,
  clearImage
}) => (
  <View
    style={[
      {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
      },
      containerStyle
    ]}
  >
    <Text style={textStyle}>
      {(selectedItem && getLabel(selectedItem)) || defaultText}
    </Text>
    {selectedItem && (
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          padding: 12
        }}
        onPress={clear}
      >
        {clearImage || (
          <Image
            style={{ width: 16, height: 16 }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAdVBMVEUAAAA0SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV40SV4ZONdZAAAAJnRSTlMAAQIDBAUGBwgRFRYZGiEjQ3l7hYaqtLm8vsDFx87a4uvv8fP1+bbY9ZEAAAB8SURBVBhXXY5LFoJAAMOCIP4VBRXEv5j7H9HFDOizu2TRFljedgCQHeocWHVaAWStXnKyl2oVWI+kd1XLvFV1D7Ng3qrWKYMZ+MdEhk3gbhw59KvlH0eTnf2mgiRwvQ7NW6aqNmncukKhnvo/zzlQ2PR/HgsAJkncH6XwAcr0FUY5BVeFAAAAAElFTkSuQmCC'
            }}
          />
        )}
      </TouchableOpacity>
    )}
  </View>
)

export default defaultFieldTemplate
