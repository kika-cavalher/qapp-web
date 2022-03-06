
import { TopMenu } from "../components/top-menu";
import { Search } from "../components/search";

export function ProjectPage () {
    const arrumarVariavel = "Projetos";

    return (
        <div>
            <TopMenu />
            <h1>{arrumarVariavel}</h1>
            <Search />

        </div>
    )
}