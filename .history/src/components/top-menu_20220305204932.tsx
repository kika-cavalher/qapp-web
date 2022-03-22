
import { useAuth } from '../hooks/useAuth';

export function TopMenu () {
    const { user } = useAuth()
    return (
        <div>
            <h1>menu</h1> 
        </div>
    )
}