import React from "react"

export type ProjectProps = {
    id: string,
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
    handleEdit: (idProjec: string, name: string, content: string, describe: string) => void
    id: string;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    nameHandler: (event: any) => void;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    contentHandler: (event: any) => void;
    describe: string;
    setDescribe: React.Dispatch<React.SetStateAction<string>>;
    describeHandler: (event: any) => void;
    isEditing: boolean, 
    setIsEditing: (value: React.SetStateAction<boolean>) => void
};
  
export type ProjectEditType = {
    name: string, 
    content: string, 
    describe: string,
};

