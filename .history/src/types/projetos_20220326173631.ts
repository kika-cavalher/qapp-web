export type ProjetoProps {
    title: string

  }


export type ListProjectProps {
    projetos: ProjetoProps[],
    selecionaProjeto: (projetoSelecionada: ProjetoProps) => void 
  }