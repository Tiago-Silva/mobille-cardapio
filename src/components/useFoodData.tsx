import { useEffect, useState } from "react";
import { FoodData } from "../interface/FoodData";

export function useFoodData(){
    const [data, setData] = useState<FoodData[]>([]);
    const getFood = async () => {
        try {
            const response = await fetch('http://192.168.20.17:8080/food');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
        
        }
    };
    useEffect(() => {
        getFood();
    },[])
    return data;
}