export type ProjectProps = {
    id?: string,
    title: string
    abbreviation: string,
    describe: string,
    // member?: string
    selecionado?: boolean,
}

export type ProjectModalProps = {
    id?: string,
    title: string
    abbreviation: string,
    describe: string,
    // member?: string
    selecionado: boolean,
    openModal: boolean,
}

export type ListProps = {
    projects: ProjectProps[],
    selectProject: (selectedProject: ProjectProps) => void 
    edit: (title:string, abbreviation:string, describe:string) => void
}


