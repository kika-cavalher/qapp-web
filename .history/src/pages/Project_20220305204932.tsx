
import { useAuth } from '../hooks/useAuth';
import { TopMenu } from "../components/top-menu";

export function ProjectPage () {
    const { user } = useAuth()
    return (
        <div>
            <TopMenu />
            <h1>{user?.name}</h1>
        </div>
    )
}