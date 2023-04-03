import axios from 'axios';
import { IFetch } from 'type/typeFetch';

const imagesApi = axios.create({
    baseURL: 'https://pixabay.com/',
});

export const fetchImages = async (search: string, page: number) => {
    const { data } = await imagesApi.get<IFetch>('api/', {
        params: {
            q: search,
            page,
            key: '31274725-b360bae12e89bdbfdfe087168',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        },
    });

    return data;
};
