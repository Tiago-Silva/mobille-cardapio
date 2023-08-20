

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header: React.FC = () => {
    return (
        <Text style={estilo.header}>Cardápio</Text>
    );
}

export default Header;

const estilo = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        fontSize: 32,
        textAlign: 'center',
        color: 'black'
    }
});