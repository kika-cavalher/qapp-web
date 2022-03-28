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

export interface CreateProjectProps {
    openModal: () => void;
    setTarefas: React.Dispatch<React.SetStateAction<ProjectProps[]>>
  }