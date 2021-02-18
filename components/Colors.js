import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Colors = ({ name, hexCode }) => {
  const background = {
    backgroundColor: hexCode
  }
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  }

    return (
        <View style={[styles.box, background]}>
            <Text style={[styles.text, textColor]}>{name}: {hexCode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
      padding: 10,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
              shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 10,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
    textBlack: {
      fontWeight: 'bold',
      color: 'black',
    }
  });

export default Colors;