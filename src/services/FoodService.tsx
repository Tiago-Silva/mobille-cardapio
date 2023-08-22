import { FoodData } from "../interface/FoodData";
import { Api } from "./Api/ApiConfig"
import { ApiException } from "./Api/ApiException";

const getAll = async (): Promise<FoodData[] | ApiException> => {
    try {
        const { data } = await Api().get('/food');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao buscar na API');
    }
}

const create = async (object: FoodData): Promise<FoodData | ApiException> => {
    try {
        const { data } = await Api().post('/food', object);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar o registro');
    }
}

export const FoodService = {
    getAll,
    create,
}