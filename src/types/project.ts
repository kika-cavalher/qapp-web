export type ProjectProps = {
    id?: string,
    title: string
    abbreviation: string,
    describe: string,
    // member?: string
    selecionado?: boolean,
}

export type ProjectModalProps = {
    id: string,
    title: string
    abbreviation: string,
    describe: string,
    // member?: string
    selecionado: boolean,
    openModal: boolean,
}


