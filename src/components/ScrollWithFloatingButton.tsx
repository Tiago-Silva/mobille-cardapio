import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone apropriado
import { FoodData } from '../interface/FoodData';
import Card from './Card';
import { useFoodData } from './useFoodData';

const ScrollWithFloatingButton = () => {
    const data:FoodData[] = useFoodData();
    return (
        <View>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View>
                    {data?.map(foodData =>
                        <Card key={foodData.id}
                        price={foodData.price}
                        title={foodData.title}
                        image={foodData.image}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    )
};

export default ScrollWithFloatingButton;