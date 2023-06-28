import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ColorPicker } from 'react-native-color-picker'
const ColorsPicker = () => {
  return (
    <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={{flex: 1}}
  />
  )
}

export default ColorsPicker

const styles = StyleSheet.create({})