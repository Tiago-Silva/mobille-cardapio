import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { FoodData } from '../interface/FoodData';
import Card from './Card';
import { FoodService } from '../services/FoodService';
import { ApiException } from '../services/Api/ApiException';

const ScrollWithFloatingButton = () => {
    const [data, setData] = useState<FoodData[]>([]);
    useEffect(() => {
        FoodService.getAll()
        .then((result) => {
            if (result instanceof ApiException) {
                console.warn(result.message)
            } else {
                setData(result);
            }
        });
    },[]);
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