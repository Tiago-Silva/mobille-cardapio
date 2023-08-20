import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


interface CardProps {
    price: number;
    title: string;
    image: string;
}

const Card = ({ price, image, title}:CardProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: image.toString(),
                }}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Price: {price}</Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        alignItems: 'center',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      price: {
        fontSize: 16,
        color: '#888888',
      },
});