import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { FoodData } from '../interface/FoodData';
import Card from './Card';
import { FoodService } from '../services/FoodService';
import { ApiException } from '../services/Api/ApiException';

interface ScrollWithFloatingButtonProps {
    isGetAll: boolean
}

const ScrollWithFloatingButton = ({isGetAll}: ScrollWithFloatingButtonProps) => {
    const [data, setData] = useState<FoodData[]>([]);
    if(isGetAll) {
        FoodService.getAll()
        .then((result) => {
            if (result instanceof ApiException) {
                console.warn(result.message)
            } else {
                setData(result);
            }
        });
        // useEffect(() => {
        // },[]);
    }
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