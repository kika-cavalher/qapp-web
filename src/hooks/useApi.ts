import useSWR from 'swr'
import api from '../services/api';
export function useApi<db = any>(url: any) {
    
    const data = useSWR<db>(url, async (url: any) => {
        const res = await api.get(url);
        return res.data
    });
    return data
}
