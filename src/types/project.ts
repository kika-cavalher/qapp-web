import React from "react"

export type ProjectProps = {
    _id: string,
    name: string
    content: string,
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


export type ProjectContextProviderProps = {
    children: React.ReactNode;
};
  
export type ProjectContextType = {
    handleAddProject: () => void;
    handleClose: () => void;
    handleSubmit: (event: any) => void;
    handleEdit: ({ _id, name, content, describe }: ProjectProps) => void
    handleDelete: (id: string) => void;
    id: string;
    setId: (value: React.SetStateAction<string>) => void
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    nameHandler: (event: any) => void;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    contentHandler: (event: any) => void;
    describe: string;
    setDescribe: React.Dispatch<React.SetStateAction<string>>;
    describeHandler: (event: any) => void;
    
};
  
export type ProjectEditType = {
    name: string, 
    content: string, 
    describe: string,
};

