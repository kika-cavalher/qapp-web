import { useState } from 'react';
import useSWR, { mutate } from 'swr'
import api from '../services/api';

export function useAxios<data = any>(url: any) {
    
    const { data, error, mutate } = useSWR<data>(url, async (url: any) => {
        const res = await api.get(url);
        return res.data
    });
    return { data, error, mutate };
}
