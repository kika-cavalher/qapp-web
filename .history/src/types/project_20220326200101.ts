export type ProjectProps = {
    id: string,
    title: string
    abbreviation: string,
    describe: string,
    member: string
    selecionado: boolean,
}

export type ItemProps = ProjectProps & {
    selectProject: (selectedProject: ProjectProps) => void 
}

export type ListProps = {
    projects: ProjectProps[],
    selectProject: (selectedProject: ProjectProps) => void 
}

export type ModalHandles {
    openModal: () => void;
}

export type CreateProjectProps = ModalHandles & {
    projects?: ProjectProps[],
    setProject?: React.Dispatch<React.SetStateAction<ProjectProps[]>>
}