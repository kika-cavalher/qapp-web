import { pipeline } from 'stream';
import useSWR from 'swr'
import api from '../services/api';

export function useAxios(url: any) {
    const { data, error } = useSWR(
        url,
        async(url: any) => {
            const res = await api.get(url);

    return res.data
    });

    return { data, error };
}