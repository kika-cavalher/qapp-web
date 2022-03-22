
import { useAuth } from '../hooks/useAuth';

export function HomePage () {
    const { user } = useAuth()
    return (
        <div>
            <h1>{user?.name}</h1>
        </div>
    )
}