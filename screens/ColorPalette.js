import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import Colors from '../components/Colors';

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <FlatList 
            ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
            data={colors}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => <Colors name={item.colorName} hexCode={item.hexCode}/>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: 'white',
    },  
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
});

export default ColorPalette;