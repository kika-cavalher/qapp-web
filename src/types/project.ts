export type ProjectProps = {
    id?: string,
    title: string
    abbreviation: string,
    describe: string,

}

export type ProjectModalProps = {
    id?: string,
    title: string
    abbreviation: string,
    describe: string,
}

export type ListProps = {
    projects: ProjectProps[],
    // selectProject: (selectedProject: ProjectProps) => void 
    // edit: (title:string, abbreviation:string, describe:string) => void
}

export type ItemProps = {
    title: string
    abbreviation: string,
    describe: string,
}

export type CreateProjectProps = {
    closeModal?: (isOpen: boolean) => void,
    createOrEditProject?: () => void,
    titleModal?: React.ReactNode,
    nameModal?: React.ReactNode,
    name_placeholder?: string | undefined,
    contentModal?: React.ReactNode,
    content_placeholder?: string | undefined,
    describeModal?: React.ReactNode,
    describe_placeholder?: string | undefined,
}

