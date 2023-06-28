import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
const WheelColor = () => {
  const [color, setColor] = useState('');

  const onColorChange = color => {
    setColor(color);
  };
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <ColorPicker
          color={color}
          onColorChange={(color) => onColorChange(color)}
          onColorChangeComplete={color => alert(`Color selected: ${color}`)}
          thumbSize={40}
          sliderSize={40}
          noSnap={true}
          row={false}
        />
       
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 70,
    paddingHorizontal: 24,
  },
});
export default WheelColor;